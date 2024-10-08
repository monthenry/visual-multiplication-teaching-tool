const dropboxLink = "https://www.dropbox.com/request/ElySqE7dR6jQqtkzEKCZ";
const pepper = "nai-project";
const maxTableSize = 12;
const questionsData = [
    { question: 'Comparing different ways of multiplying', inputType: 'introduction' },
    { question: 'How old are you in years?', inputType: 'age' },
    { question: 'What is your highest completed level of education?', inputType: 'degree' },
    { question: 'Did you study in STEM (science, technology, engineering, and mathematics)?', inputType: 'yesno' },
    { question: 'Look at the multiplication table, move your mouse across it and get familiar with it for the next minute.', inputType: 'discovery' },
    { question: 'On the right panel, click on the product of: <br/><br/> 5 x 8 = ?', inputType: 'click', correctAnswer: '40'  },
    { question: 'On the right panel, click on the product of: <br/><br/> 4 x 7 = ?', inputType: 'click', correctAnswer: '28'  },
    { question: 'On the right panel, click on the product of: <br/><br/> 8 x 6 = ?', inputType: 'click', correctAnswer: '48' },
    { question: 'On the right panel, click on the product of: <br/><br/> 9 x 4 = ?', inputType: 'click', correctAnswer: '36' },
    { question: 'On the right panel, click on the product of: <br/><br/> 6 x 7 = ?', inputType: 'click', correctAnswer: '42' },
    { question: 'On the right panel, click on the product of: <br/><br/> 3 x 9 = ?', inputType: 'click', correctAnswer: '27' },
    { question: 'On the right panel, click on the product of: <br/><br/> 7 x 5 = ?', inputType: 'click', correctAnswer: '35' },
    { question: 'On the right panel, click on the product of: <br/><br/> 2 x 6 = ?', inputType: 'click', correctAnswer: '18' },
    { question: 'On the right panel, click on the product of: <br/><br/> 5 x 12 = ?', inputType: 'click', correctAnswer: '60' },
    { question: 'On the right panel, click on the product of: <br/><br/> 10 x 8 = ?', inputType: 'click', correctAnswer: '80' },
    { question: 'On the right panel, click on the product of: <br/><br/> 3 x 5 = ?', inputType: 'click', correctAnswer: '15' },
    { question: 'On the right panel, click on the product of: <br/><br/> 2 x 9 = ?', inputType: 'click', correctAnswer: '18' },
    { question: 'On the right panel, click on the product of: <br/><br/> 7 x 4 = ?', inputType: 'click', correctAnswer: '28' },
    { question: 'On the right panel, click on the product of: <br/><br/> 6 x 8 = ?', inputType: 'click', correctAnswer: '48' },
    { question: 'On the right panel, click on the product of: <br/><br/> 10 x 3 = ?', inputType: 'click', correctAnswer: '30' },
    { question: 'Write below the product of: <br/><br/> 4 x 3 = ?', inputType: 'text', correctAnswer: '12' },
    { question: 'Write below the product of: <br/><br/> 5 x 5 = ?', inputType: 'text', correctAnswer: '25' },
    { question: 'Write below the product of: <br/><br/> 7 x 9 = ?', inputType: 'text', correctAnswer: '63' },
    { question: 'Write below the product of: <br/><br/> 8 x 8 = ?', inputType: 'text', correctAnswer: '64' },
    { question: 'Write below the product of: <br/><br/> 10 x 6 = ?', inputType: 'text', correctAnswer: '60' },
    { question: 'Write below the product of: <br/><br/> 2 x 4 = ?', inputType: 'text', correctAnswer: '8' },
    { question: 'Write below the product of: <br/><br/> 6 x 5 = ?', inputType: 'text', correctAnswer: '30' },
    { question: 'Write below the product of: <br/><br/> 3 x 7 = ?', inputType: 'text', correctAnswer: '21' },
    { question: 'Write below the product of: <br/><br/> 9 x 8 = ?', inputType: 'text', correctAnswer: '72' },
    { question: 'Write below the product of: <br/><br/> 4 x 10 = ?', inputType: 'text', correctAnswer: '40' },
    { question: 'Write below the product of: <br/><br/> 9 x 2 = ?', inputType: 'text', correctAnswer: '18' },
    { question: 'Write below the product of: <br/><br/> 6 x 4 = ?', inputType: 'text', correctAnswer: '24' },
    { question: 'Write below the product of: <br/><br/> 7 x 6 = ?', inputType: 'text', correctAnswer: '42' },
    { question: 'Write below the product of: <br/><br/> 5 x 10 = ?', inputType: 'text', correctAnswer: '50' },
    { question: 'Write below the product of: <br/><br/> 3 x 8 = ?', inputType: 'text', correctAnswer: '24' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 42', inputType: 'click', correctAnswer: '42' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 54', inputType: 'click', correctAnswer: '54' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 64', inputType: 'click', correctAnswer: '64' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 60', inputType: 'click', correctAnswer: '60' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 36', inputType: 'click', correctAnswer: '36' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 48', inputType: 'click', correctAnswer: '48' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 72', inputType: 'click', correctAnswer: '72' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 30', inputType: 'click', correctAnswer: '30' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 45', inputType: 'click', correctAnswer: '45' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 20', inputType: 'click', correctAnswer: '20' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 50', inputType: 'click', correctAnswer: '50' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 28', inputType: 'click', correctAnswer: '28' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 25', inputType: 'click', correctAnswer: '25' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 18', inputType: 'click', correctAnswer: '18' },
    { question: 'On the right panel, click on the multiplication that equals to: <br/><br/> 32', inputType: 'click', correctAnswer: '32' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 45', inputType: 'multiplication1', correctAnswer: '45' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 56', inputType: 'multiplication1', correctAnswer: '56' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 63', inputType: 'multiplication1', correctAnswer: '63' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 72', inputType: 'multiplication1', correctAnswer: '72' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 81', inputType: 'multiplication1', correctAnswer: '81' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 27', inputType: 'multiplication1', correctAnswer: '27' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 36', inputType: 'multiplication1', correctAnswer: '36' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 48', inputType: 'multiplication1', correctAnswer: '48' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 60', inputType: 'multiplication1', correctAnswer: '60' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 64', inputType: 'multiplication1', correctAnswer: '64' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 18', inputType: 'multiplication1', correctAnswer: '18' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 30', inputType: 'multiplication1', correctAnswer: '30' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 42', inputType: 'multiplication1', correctAnswer: '42' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 14', inputType: 'multiplication1', correctAnswer: '14' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 24', inputType: 'multiplication1', correctAnswer: '24' },
    { question: 'Write below the product of: <br/><br/> 13 x 3 = ?', inputType: 'test', correctAnswer: '39' },
    { question: 'Write below the product of: <br/><br/> 9 x 7 = ?', inputType: 'test', correctAnswer: '63' },
    { question: 'Write below the product of: <br/><br/> 14 x 2 = ?', inputType: 'test', correctAnswer: '28' },
    { question: 'Write below the product of: <br/><br/> 8 x 8 = ?', inputType: 'test', correctAnswer: '64' },
    { question: 'Write below the product of: <br/><br/> 12 x 5 = ?', inputType: 'test', correctAnswer: '60' },
    { question: 'Write below the product of: <br/><br/> 7 x 11 = ?', inputType: 'test', correctAnswer: '77' },
    { question: 'Write below the product of: <br/><br/> 15 x 4 = ?', inputType: 'test', correctAnswer: '60' },
    { question: 'Write below the product of: <br/><br/> 6 x 9 = ?', inputType: 'test', correctAnswer: '54' },
    { question: 'Write below the product of: <br/><br/> 10 x 10 = ?', inputType: 'test', correctAnswer: '100' },
    { question: 'Write below the product of: <br/><br/> 8 x 12 = ?', inputType: 'test', correctAnswer: '96' },
    { question: 'Write below the product of: <br/><br/> 11 x 6 = ?', inputType: 'test', correctAnswer: '66' },
    { question: 'Write below the product of: <br/><br/> 5 x 9 = ?', inputType: 'test', correctAnswer: '45' },
    { question: 'Write below the product of: <br/><br/> 16 x 2 = ?', inputType: 'test', correctAnswer: '32' },
    { question: 'Write below the product of: <br/><br/> 7 x 7 = ?', inputType: 'test', correctAnswer: '49' },
    { question: 'Write below the product of: <br/><br/> 14 x 4 = ?', inputType: 'test', correctAnswer: '56' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 36', inputType: 'multiplication', correctAnswer: '36' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 56', inputType: 'multiplication', correctAnswer: '56' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 72', inputType: 'multiplication', correctAnswer: '72' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 30', inputType: 'multiplication', correctAnswer: '30' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 81', inputType: 'multiplication', correctAnswer: '81' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 110', inputType: 'multiplication', correctAnswer: '110' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 45', inputType: 'multiplication', correctAnswer: '45' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 64', inputType: 'multiplication', correctAnswer: '64' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 90', inputType: 'multiplication', correctAnswer: '90' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 120', inputType: 'multiplication', correctAnswer: '120' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 24', inputType: 'multiplication', correctAnswer: '24' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 42', inputType: 'multiplication', correctAnswer: '42' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 63', inputType: 'multiplication', correctAnswer: '63' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 88', inputType: 'multiplication', correctAnswer: '88' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 48', inputType: 'multiplication', correctAnswer: '48' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 99', inputType: 'multiplication', correctAnswer: '99' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 12', inputType: 'multiplication', correctAnswer: '12' },
    { question: 'Write below the multiplication giving:<br/><small>(format: "number_1 x number_2")</small> <br/><br/> ? x ? = 21', inputType: 'multiplication', correctAnswer: '21' },
    { question: 'Briefly describe your thoughts about the exercise, was it difficult/easy ? Did you help yourself with the table to solve the multiplication ? What was your thought process ?', inputType: 'feedback' },
    { question: 'If you want a summary of the experiment or are interested in getting psy credits, please answer the <a href="https://projectnia.limesurvey.net/284432?lang=en" target="_blank">following form</a>. <br/>Your experiment results will remain anonymous.', inputType: 'form'},
    { question: '', inputType: 'final' },
];

var experimentalMultiplicationMod = Math.random() < 0.5; // choosing randomly the experimentation mod for each user
var userData = {};
var currentSection = -1;
var questionKey = 'Question' + currentSection;
var startTime = performance.now();
var userScore = 0;


$(document).ready(function() {
    nextFormSection();
});

// Function to show the current form section
function nextFormSection() {
    // Get the result from the current section
    var result = experimentalMultiplicationMod;
    var inputField = $('#result-field');
    var answerTime = (performance.now() - startTime) / 1000;
    var isCorrect = false;
    var scoreForThisQuestion = 0;
    var timeExceeded = false;

    if (inputField.length > 0) {
        if (questionsData[currentSection].inputType == 'click') {
            result = inputField.data('value');
        } else {
            result = inputField.val();
            if (result.length == 0) {
                alert("Please fill in your answer before going to the next question.");
                return;
            }
        }
    }

    // Check if the current section is a question with scoring
    if (currentSection >= 5) {
        var correctAnswer = questionsData[currentSection].correctAnswer;

        if (inputField.length > 0) {
            if (questionsData[currentSection].inputType === 'click') {
                userAnswer = inputField.data('value');
                isCorrect = userAnswer === correctAnswer;
            } else if (questionsData[currentSection].inputType === 'multiplication' || questionsData[currentSection].inputType === 'multiplication1') {
                userAnswer = inputField.val();
                // Adjust the split logic to handle inputs without spaces
                let numbers = userAnswer.includes(' x ') ? userAnswer.split(' x ') :
                   userAnswer.includes(' * ') ? userAnswer.split(' * ') :
                   userAnswer.includes('*') ? userAnswer.split('*') :
                   userAnswer.includes('x') ? userAnswer.split('x') : [userAnswer];
                if (numbers.length === 2) {
                    let product = parseInt(numbers[0].trim()) * parseInt(numbers[1].trim());
                    isCorrect = product === parseInt(correctAnswer);
                } 
            } else if (questionsData[currentSection].inputType === 'text' || questionsData[currentSection].inputType === 'test') {
                userAnswer = inputField.val();
                isCorrect = userAnswer === correctAnswer;
            }

            if (answerTime <= 15) {
                // Score decreases linearly from 1000 to 500 over 15 seconds
                scoreForThisQuestion = 1000 - (answerTime / 15 * 500);
                if (isCorrect) {
                    userScore += scoreForThisQuestion;
                }
            } else {
                // If it takes more than 15 seconds, score is 0 and set timeExceeded to true
                scoreForThisQuestion = 0;
                timeExceeded = true;
            }

            // Use the flag to decide what message to display
            var feedbackMessage = isCorrect ? "Correct! Score for this question: " + scoreForThisQuestion : "Incorrect.";
            if (timeExceeded) {
                displayTimeExceededMessage();
            } else {
                updateScoreDisplay(userScore, feedbackMessage);
            }
        }
    }

     // Save user data for the current section
     userData['Question' + currentSection] = {
        answer: result,
        time: answerTime,
        score: userScore,
        isCorrect: isCorrect,
        scoreForThisQuestion: scoreForThisQuestion
    };
    

    if (currentSection === questionsData.length - 1) {
        displayFinalScore();
    } else {
        // Move to the next question
        currentSection++;
        clearPage();
        generateForm(questionsData[currentSection], currentSection);
        $("#result-field").focus();
        startTime = performance.now();
    }
}

// Function to create the current form and append it to page
function generateForm(questionData, index) {
    var formContainer = $('#form-container');

    // Create a new form section
    const section = $('<div class="form-section"></div>').css('display', 'block');

    // Create form question
    const questionContainer = $('<div class="form-question"></div>');

    // Create heading
    const heading = '<h3>'+questionData.question+'</h3>';
    questionContainer.append($(heading));

    // If experiment over, create and display final page
    if (questionData.inputType == 'final') {
        questionContainer.append($('<h3>THE EXPERIMENT IS OVER</h3>'));
        questionContainer.append($('<div>SAVE THE RESULT TO YOUR COMPUTER AND UPLOAD IT USING THIS DROPBOX LINK (use a fake name and email on the dropbox page): </div>'));

        const buttonsDiv = $('<div></div>');
        const saveButton = $('<button class="save-button">SAVE</button>');
        saveButton.on('click', function () {
            downloadResults();
        });
        const uploadButton = $('<button class="upload-button">UPLOAD RESULT</button>');
        uploadButton.on('click', function () {
            window.open(dropboxLink, '_blank');
        });
        
        buttonsDiv.append(saveButton);
        buttonsDiv.append(uploadButton);
        questionContainer.append(buttonsDiv);
        section.append(questionContainer);
        formContainer.append(section);

        return;
    }

    // If experiment begins, show introduction page
    if (questionData.inputType == 'introduction') {
        questionContainer.append($('<div>The goal of this study is to compare two different ways of multiplying. Your task will be to answer some calculation exercises as fast as possible with the help of some support material. Your participation helps us improve the way multiplication is done and taught.<br><br></div>'));
        questionContainer.append($('<div>This study is carried out as part of a course project in the Artificial and Natural Intelligence course at the University of Tartu.</div>'));
        questionContainer.append($('<ul><li>The study takes about 10-15 minutes to complete, is anonymous and no response data is automatically sent to the researchers.</li><li>You have the right to stop participating in the study at any time without consequences.</li><li>Psychology students can receive experiment participation credits by participating in this study.</li><li>With any questions related to the study or methods, please contact the project team via henry.marie.mont@ut.ee, or the supervisor of this project Taavi Kivisik, Junior Research Fellow, Institute of Computer Science (taavi.kivisik@ut.ee).</li></ul>'));
        questionContainer.append($('<div>Your score in the following test will depend on the speed and correctness of your answers. The time limit is set to 20 seconds.</div>'));
    }

    if (questionData.inputType == 'discovery' && experimentalMultiplicationMod == true) {
        questionContainer.append($('<div>Look at the dots, their quantity is equal to the product of the multiplication !</div>'));
    }

    // Create multiplication result box
    if (questionData.inputType == 'discovery' || questionData.inputType == 'click') {
        const resultContainer = $('<div class="result-container"></div>');
        const resultBox = $('<div class="result-box"></div>');
        const multiplicationInfo = $('<div id="multiplication-info"></div>');
        resultBox.append(multiplicationInfo);
        resultContainer.append(resultBox);
        questionContainer.append(resultContainer);
    }

    // Create input
    if (questionData.inputType == 'age' || questionData.inputType == 'text' || questionData.inputType == 'test' || questionData.inputType == 'multiplication' || questionData.inputType == 'multiplication1') {
        const label = $('<label></label>').text('Answer:');
        questionContainer.append(label);
        const input = $('<input type="text" id="result-field">');
        questionContainer.append(input);
    }

    if (questionData.inputType == 'feedback') {
        const label = $('<label></label>').text('Answer:');

        // Set the CSS display property to make the label a block element
        label.css('display', 'block');

        questionContainer.append(label);

        // Use <textarea> directly without a <div>
        const textarea = $('<textarea id="result-field"></textarea>');

        // Set the number of rows for the textarea
        textarea.attr('rows', '8');

        // Set CSS property to make the width auto
        textarea.css('width', '100%');
        textarea.css('display', 'block');

        questionContainer.append(textarea);
    }

    if (questionData.inputType == 'degree') {
        const labelContainer = $('<div></div>');
        const selectContainer = $('<div></div>');

        const label = $('<label></label>').text('Select Answer:');
        labelContainer.append(label);

        const select = $('<select id="result-field"></select>');
        select.append($('<option value="no answer">Prefers not to answer</option>'));
        select.append($('<option value="high-school">High School</option>'));
        select.append($('<option value="associate">Associate Degree</option>'));
        select.append($('<option value="bachelors">Bachelor\'s Degree</option>'));
        select.append($('<option value="masters">Master\'s Degree or higher</option>'));
        selectContainer.append(select);

        questionContainer.append(labelContainer);
        questionContainer.append(selectContainer);
    }

    if (questionData.inputType == 'yesno') {
        // Create container divs for the yesno elements
        const labelContainer = $('<div></div>');
        const selectContainer = $('<div></div>');

        const label = $('<label></label>').text('Select Answer:');
        labelContainer.append(label);

        const select = $('<select id="result-field"></select>');
        select.append($('<option value="no answer">Prefers not to answer</option>'));
        select.append($('<option value="stem">Yes</option>'));
        select.append($('<option value="not stem">No</option>'));
        selectContainer.append(select);

        // Append the container divs to the main question container
        questionContainer.append(labelContainer);
        questionContainer.append(selectContainer);
    }

    // Create Next button
    if (questionData.inputType == 'introduction' || questionData.inputType == 'form' || questionData.inputType == 'age' || questionData.inputType == 'discovery' || questionData.inputType == 'multiplication' || questionData.inputType == 'multiplication1' || questionData.inputType == 'text' || questionData.inputType == 'test' || questionData.inputType == 'degree' || questionData.inputType == 'yesno' || questionData.inputType == 'feedback') {
        const button = $('<button id="next-button" class="next-button">Next</button>').on('click', function () {
            nextFormSection();
        });
        
        // Add listener to go next when enter is pressed
        document.getElementById('body').onkeypress=function(e){
            if(e.keyCode==13 && document.getElementById('next-button')){
                document.getElementById('next-button').click();
            }
        }

        questionContainer.append(button);
    }

    // Generate table corresponding to the form
    if (questionData.inputType == 'discovery' || questionData.inputType == 'text' || questionData.inputType == 'click' || questionData.inputType == 'multiplication1') {
        if (!experimentalMultiplicationMod) {
            generateStandardMultiplicationTables();
            addStandardHighlightLogic(questionData.inputType == 'discovery');
        } else {
            generateTable(false, maxTableSize, maxTableSize);
            addHighlightLogic(questionData.inputType == 'discovery');
        }
    }

    if (questionData.inputType == 'click') {
        addClickLogic();
    }

    // Append the section to the form container
    section.append(questionContainer);
    formContainer.append(section);
}

function clearPage() {
    // Remove forms and tables
    $('#table-container').empty();
    $('#form-container').empty();
}

// Function to generate the inverted multiplication table
function generateTable(withResult, width, height) {
    var tableContainer = $('#table-container');
    var table = $('<table id="experimental-table" class="thicker-column thicker-row thicker-column-left thicker-row-top"></table>');
    var tableBody = $('<tbody></tbody>');

    // Loop through rows in reverse order
    for (var i = height; i >= 1; i--) {
        // Create a table row
        var row = $('<tr></tr>');

        // Loop through columns
        for (var j = 1; j <= width; j++) {
            var cell;
            var product = i * j;
            var defaultCell = '';

            // Add numbered or tokened cells
            if (withResult) {
                defaultCell = product;
                cell = $('<td></td>').html(defaultCell);
            } else {
                defaultCell = '<svg width="20" height="20"><circle cx="10" cy="10" r="8" fill="gray" /></svg>';
                cell = $('<td></td>').html(defaultCell).addClass('dot-cell');
            }

            // Add bolder lines
            if (i % 10 % 3 === 0) {
                cell.addClass('bold-row');
            }
            if (j % 10 % 3 === 0) {
                cell.addClass('bold-column');
            }

            if(i % 10 === 0) {
                cell.addClass('bolder-row');
            }

            if(j % 10 === 0) {
                cell.addClass('bolder-column');
            }

            cell.data('value', product.toString());

            cell.appendTo(row)
        }

        // Append to page
        row.appendTo(tableBody);
        tableBody.appendTo(table);
        table.appendTo(tableContainer);
    }
}

// Function to generate the standard set of multiplication tables
function generateStandardMultiplicationTables() {
    var tableContainer = $('#table-container');

    for (var i = 1; i <= maxTableSize; i++) {
        var table = $('<table class="multiplication-table"></table>');
        for (var j = 1; j <= 12; j++) {
            var row = $('<tr></tr>');
            var cell = $('<td></td>').text(i + ' x ' + j + ' = ' + (i * j));

            // Set custom attribute 'data-value' on the cell using jQuery
            cell.data('value', (i * j).toString());

            row.append(cell);
            table.append(row);
        }
        tableContainer.append(table);
    }
}

// Function to add a selection highlight on top of table
function addHighlightLogic(displayMultiplication=false) {
    // Track mouse movements to highlight cells
    $('td').mousemove(function(event) {
        // Get the index of the cell where the mouse is currently positioned
        var rowIndex = $(this).parent().index();
        var colIndex = $(this).index();

        // Write multiplication in result box
        var multiplicand = maxTableSize - rowIndex;
        var multiplier = colIndex + 1;
        var result = multiplicand * multiplier;
        var multiplication = `${result}`;
        if (displayMultiplication) {
            multiplication = `${multiplicand} x ${multiplier} = ${result}`;
        }
        $('#multiplication-info').text(multiplication);

        // Remove previous highlight class from all cells
        $('td').removeClass('highlight');

        // Highlight cells from the bottom left corner to the cursor position
        for (var i = rowIndex; i <= 19; i++) {
            for (var j = 0; j <= colIndex; j++) {
                $('table tbody tr').eq(i).find('td').eq(j).addClass('highlight');
            }
        }
    });

    // Clear the table when the mouse leaves the table
    $('table').mouseleave(function() {
        $('td').removeClass('highlight');
    });
}

function addStandardHighlightLogic(displayMultiplication=false) {
    // Track mouse movements to highlight cells
    $('.multiplication-table td').mousemove(function (event) {
        // Remove previous highlight class from all inner cells
        $('.multiplication-table td').removeClass('highlight');

        // Highlight the inner cell being pointed at
        $(this).addClass('highlight');

        // Write multiplication in result box
        var multiplication = $(this).text();
        if (!displayMultiplication) {
            var multiplicationElements = multiplication.split(' ');
            multiplication = multiplicationElements[multiplicationElements.length - 1];
        }
        $('#multiplication-info').text(multiplication);
    });

    // Clear the table when the mouse leaves the table
    $('.multiplication-table').mouseleave(function () {
        $('.multiplication-table td').removeClass('highlight');
    });
}

function addClickLogic() {
    $('td').click(function () {
        var clickedValue = $(this).data('value'); // Product of the multiplication
        var rowIndex = $(this).parent().index() + 1; // Row index
        var colIndex = $(this).index() + 1; // Column index
        var clickedPair = rowIndex + "*" + colIndex; // Format: rowIndex*colIndex

        $(this).attr('id', 'result-field');
        $('#result-field').data('value', clickedValue);
        $('#result-field').data('pair', clickedPair); // Store the multiplication pair

        nextFormSection();
    });
}

// Function to convert object to JSON and trigger download
function downloadResults() {
    console.log(userData);
    addHashField().then(function() {
        var jsonData = JSON.stringify(userData);
        var blob = new Blob([jsonData], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'results.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

// Add the hash of our results to be sure user didn't tamper with data
function addHashField() {
    // Convert the object to a JSON string without formatting
    var jsonString = JSON.stringify(userData, Object.keys(userData).sort());

    // Add a "pepper" string to the JSON string
    var jsonStringWithPepper = jsonString + pepper;

    // Convert the JSON string to an ArrayBuffer
    var encoder = new TextEncoder();
    var data = encoder.encode(jsonStringWithPepper);

    // Calculate the SHA-256 hash
    return crypto.subtle.digest('SHA-256', data).then(function(hashBuffer) {
        // Convert the hash buffer to a hex string
        var hashArray = Array.from(new Uint8Array(hashBuffer));
        var hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

        // Add the "hash" field to the original userData object
        userData["hash"] = { answer: hashHex, time: 0.0 };
    }).catch(function(error) {
        console.error('Error calculating hash:', error);
    });
}

function displayFinalScore() {
    var finalScoreContainer = $('<div class="final-score"></div>');
    finalScoreContainer.append($('<h3>Your Final Score: ' + userScore + '</h3>'));
    $('#form-container').append(finalScoreContainer);

    // Update user data with final score
    userData.finalScore = userScore;
}

function updateScoreDisplay(score, message, timeExceeded = false) {
    let displayMessage = timeExceeded ? "Time limit exceeded. Score for this question is 0." : "Current Score: " + score + ". " + message;
    $('#current-score').text(displayMessage);
}

function displayTimeExceededMessage() {
    var alertBox = $("#time-exceeded-alert");
    alertBox.html("Time limit exceeded.<br/>Score for this question is 0.");
    alertBox.show(); // Show the alert box

    // Hide the alert box after 5 seconds
    setTimeout(function() {
        alertBox.hide();
    }, 5000);
}