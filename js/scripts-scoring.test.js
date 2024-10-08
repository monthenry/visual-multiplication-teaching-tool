// scripts-scoring.test.js
const $ = require('jquery'); // Ensure jQuery is available
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM(`<html><body>
    <div id="form-container"></div>
    <div id="table-container"></div>
    <input type="text" id="result-field" />
</body></html>`);

global.window = jsdom.window;
global.document = jsdom.window.document;
global.$ = $;

// Import the script you want to test
require('./scripts-scoring.js'); // Adjust the path according to your directory structure

describe('Multiplication Experiment Scoring', () => {
    beforeEach(() => {
        // Reset the DOM and variables before each test
        $('#form-container').empty();
        $('#table-container').empty();
        userData = {}; // Reset user data
        currentSection = -1;
        userScore = 0;
        startTime = performance.now();
    });

    test('should initialize with correct default values', () => {
        expect(currentSection).toBe(-1);
        expect(userScore).toBe(0);
        expect(typeof userData).toBe('object');
    });

    test('should show next form section when called', () => {
        // Simulate moving to the next question
        currentSection = 0;
        nextFormSection();
        expect($('#form-container').children().length).toBe(1); // Check that a new section is added
    });

    test('should calculate score correctly for a correct answer within time limit', () => {
        currentSection = 5; // Simulating a question that has scoring
        $('#result-field').val('40'); // Simulate user input
        performance.now = jest.fn(() => startTime + 5000); // Simulate 5 seconds elapsed

        nextFormSection();

        // Score should be calculated
        expect(userScore).toBeGreaterThan(0);
        expect(userScore).toBeLessThan(1000); // Should be less than 1000 due to time penalty
    });

    test('should not award score for an incorrect answer', () => {
        currentSection = 5; // Simulating a question that has scoring
        $('#result-field').val('30'); // Simulate wrong user input
        performance.now = jest.fn(() => startTime + 5000); // Simulate 5 seconds elapsed

        nextFormSection();

        expect(userScore).toBe(0); // Score should be 0 for incorrect answer
    });

    test('should limit scoring to zero if time exceeded', () => {
        currentSection = 5; // Simulating a question that has scoring
        $('#result-field').val('40'); // Simulate user input
        performance.now = jest.fn(() => startTime + 16000); // Simulate 16 seconds elapsed

        nextFormSection();

        expect(userScore).toBe(0); // Score should be zero due to time limit exceeded
    });

    test('should handle empty input gracefully', () => {
        currentSection = 5; // Simulating a question that has scoring
        $('#result-field').val(''); // Simulate empty user input

        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {}); // Mock alert
        nextFormSection();

        expect(alertSpy).toHaveBeenCalledWith("Please fill in your answer before going to the next question.");
        alertSpy.mockRestore();
    });

    test('should generate multiplication table correctly', () => {
        generateTable(false, 12, 12); // Generate a multiplication table
        expect($('#table-container').find('table').length).toBe(1); // Check if table is generated
        expect($('#table-container').find('td').length).toBe(144); // Check if there are 12 * 12 cells
    });
});
