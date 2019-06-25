$( document ).ready(function() {

        var game = {
            questions: [
            {
                   question: 'what company developed Halo reach?',
                   possibles: ['343 Industries', 'bungie', 'treyarch', 'activision'],
                   id: 'question-one',
                   answer: 1
            }, {
                question: 'what company developed call of duty 4 modern warfare?',
                possibles: ['treyarch', 'activision', 'bungie', 'infinity ward', 'call of duty'],
                id: 'question-two',
                answer: 3
            }, {
                question: 'what company developed banjo kazooie?',
                possibles: ['rare', 'bungie', 'from soft', 'sledgehammer games', 'none of the above'],
                id: 'question-three',
                answer: 0
            }, {
                question: 'what company published destiny?',
                possibles: ['bungie', 'blizzard', 'activision', 'destini', 'none of the above'],
                id: 'question-four',
                answer: 2
            }, {
                question: 'what company published destiny 2 shadowkeep?',
                possibles: ['activision', 'blizzard', 'bungie', 'pokemon', 'none of the above'],
                id: 'question-five',
                answer: 2
            }, {
                question: 'what company developed halo: combat evolved(aniversary)?',
                possibles: ['bungie', '343 Industries', 'activision', 'microsoft', 'xbox'],
                id: 'question-six',
                answer: 1
    
            }, {
                question: 'what company developed this game?',
                possibles: ['someone', 'no one', 'yes', 'no', 'there is no company'],
                id: 'question-seven',
                answer: 4
            }, {
                question: 'yes or no?',
                possibles: ['yes', 'no', 'always yes', 'always no', 'yes/no'],
                id: 'question-eight',
                answer: 2
            }, {
                question: 'do you understand how this works ?',
                possibles: ['yes', 'no'],
                id: 'question-nine',
                answer: 0
            }, {
                question: 'who did live action anime/game movie better?',
                possibles: ['alladin', 'detective pikachu', 'sonic the hedgehog', 'dragonball evolution'],
                id: 'question-ten',
                answer: 1
            }
            ]}
    
        
        var message = 'Game Over!';
        
        
    
    
        $(".startGame").on("click", function (){
    
            $('.wrapper').show();
            console.log('hello');
            run();
            $(this).hide();
        });
    
        
        var number = 35;
        $('#timeLeft').on('click', run);
    

        function decrement(){
            number--;
            $('#timeLeft').html('<h2>' + number + " seconds"+'</h2>');
            if (number === 0){
            stop();
            $('#message').html('time up!');
            alert("Times Up")
            checkAnswers();
            }
        }

        function run(){
            counter = setInterval(decrement, 1000);
        }
        function stop(){

            clearInterval(counter);
        }
        run();
    
    
    function formTemplate(data) {
   
        var qString = "<form id='questionOne'>"+ data.question +"<br>";
    
        var possibles = data.possibles;
        for (var i = 0; i < possibles.length; i++) {
            var possible = possibles[i];
            console.log(possible);
            qString = qString + "<input type='radio' name='"+data.id+"' value="+ i +">"+possible;
    
        }
        return qString + "</form>";
    }
    window.formTemplate = formTemplate;
    
    
    function buildQuestions(){
        var questionHTML = ''
        for (var i = 0; i<game.questions.length; i++) {
            questionHTML = questionHTML + formTemplate(game.questions[i]);
        }
        $('#questions-container').append(questionHTML);
    
    }
    
    function isCorrect(question){
        var answers = $('[name='+question.id+']');
        var correct = answers.eq(question.answer);
        var isChecked = correct.is(':checked');
        return isChecked;
    }
    
    
    buildQuestions();
    
   
    function resultsTemplate(question){
        var htmlBlock = '<div>'
        htmlBlock = htmlBlock + question.question + ': ' + isChecked;
        return htmlBlock + "</div>";
    }
    
    
    function checkAnswers (){
    
   
        var resultsHTML = '';
        var guessedAnswers = [];
        var correct = 0;
        var incorrect = 0;
        var unAnswered =0
    
   
        for (var i = 0; i<game.questions.length; i++) {
            if (isCorrect(game.questions[i])) {
                correct++;
            } else {
 
                if (checkAnswered(game.questions[i])) {
                    incorrect++;
                } else {
                    unAnswered++;
                }
            }
    
        }
   
        $('.results').html('correct: '+correct+ "<br>" +'incorrect: '+incorrect+ "<br>" +'unanswered: '+unAnswered);
    }
    
    
    function checkAnswered(question){
        var anyAnswered = false;
        var answers = $('[name='+question.id+']');
    
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                anyAnswered = true;
            }
        }
    
        return anyAnswered;
    
    }
    
    
        $('#doneButton').on('click', function() {
        checkAnswers();
        stop();
        $("#messageDiv").html("Game Over!");
        })
    });