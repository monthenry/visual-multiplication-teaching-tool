// Import jQuery and the scripts file
import $ from 'jquery';
import './scripts.js'; // Adjust the path as needed

// Mock the performance.now() function
const originalPerformanceNow = performance.now;

beforeEach(() => {
    // Reset the DOM
    document.body.innerHTML = `
        <div id="form-container"></div>
        <div id="table-container"></div>
        <div id="body"></div>
        <div id="result-field" data-value=""></div>
    `;
    // Mock performance.now()
    performance.now = jest.fn(() => 1000);
});

// Restore the original performance.now() after tests
afterAll(() => {
    performance.now = originalPerformanceNow;
});

describe('Multiplication Experiment Form', () => {
    test('nextFormSection should save user data and move to the next question', () => {
        // Setup initial conditions
        currentSection = 0; // Start with the first question
        $('#result-field').val('5'); // Simulate user input
        userData = {}; // Reset user data

        // Call nextFormSection
        nextFormSection();

        // Check that userData is updated correctly
        expect(userData['Question0'].answer).toBe('5');
        expect(currentSection).toBe(1); // Ensure we're on the next question
    });

    test('nextFormSection should alert if answer is empty', () => {
        // Mock alert
        window.alert = jest.fn();

        // Setup initial conditions
        currentSection = 0; // Start with the first question
        $('#result-field').val(''); // Simulate empty input
        userData = {}; // Reset user data

        // Call nextFormSection
        nextFormSection();

        // Check that alert was called
        expect(window.alert).toHaveBeenCalledWith("Please fill in your answer before going to the next question.");
        expect(currentSection).toBe(0); // Ensure we're still on the current question
    });

    test('generateForm should create input fields based on question type', () => {
        // Setup
        currentSection = 1; // Age question
        generateForm(questionsData[currentSection], currentSection);

        // Check if the input field is created correctly
        expect($('#form-container input[type="text"]').length).toBe(1);
    });

    test('downloadResults should trigger a download of user data as JSON', async () => {
        // Setup user data
        userData = {
            Question0: { answer: '5', time: 5 },
            Question1: { answer: '10', time: 10 },
        };

        // Mock Blob and URL.createObjectURL
        const blobMock = jest.fn();
        const createObjectURLMock = jest.fn();
        window.Blob = jest.fn(() => blobMock);
        window.URL.createObjectURL = createObjectURLMock;

        // Call downloadResults
        await downloadResults();

        // Check that JSON was created and the download was triggered
        expect(blobMock).toHaveBeenCalledWith([JSON.stringify(userData)], { type: 'application/json' });
        expect(createObjectURLMock).toHaveBeenCalled();
    });

    test('clearPage should remove all elements from form and table containers', () => {
        // Setup some elements in the containers
        $('#form-container').append('<div class="form-section"></div>');
        $('#table-container').append('<table></table>');

        // Call clearPage
        clearPage();

        // Check that both containers are empty
        expect($('#form-container').children().length).toBe(0);
        expect($('#table-container').children().length).toBe(0);
    });

    test('generateTable should create a table with the correct number of rows and columns', () => {
        // Call generateTable with parameters
        generateTable(true, 3, 3);

        // Check that table is created and contains 3 rows
        expect($('#table-container table tbody tr').length).toBe(3);
        // Check that each row has 3 columns
        expect($('#table-container table tbody tr').first().children('td').length).toBe(3);
    });
});
