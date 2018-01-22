
var questionsInfinitive = [{
        question: "What is the past participle for this infinitive? <ul><li>voir</li></ul>",
        options: ["voit", "veut", "vu"],
        correctAnswer: 2
    },

    {
        question: "What is the past participle for this infinitive? <ul><li>avoir</li></ul>",
        options: ["eu", "avoit", "avou"],
        correctAnswer: 0
    },

    {
        question: "What is the past participle for this infinitive? <ul><li>vivre</li></ul>",
        options: ["vit", "vivit", "vécu"],
        correctAnswer: 2
    },

    {
        question: "What is the past participle for this infinitive? <ul><li>écouter</li></ul>",
        options: ["écout", "écouté", "écoutét"],
        correctAnswer: 1
    },

    {
        question: "What is the past participle for this infinitive? <ul><li>aller</li></ul>",
        options: ["allé", "vait", "alli"],
        correctAnswer: 0
    }

];

var score = 0;
var currentQuestion = 0;
    
function newGame() {
    score = 0;
    currentQuestion = 0;
    $('.question_h2').html("Question Number ");
    $('.questionNum').html("1");
    $('.userAnswer').empty();
    $('.userScore').html(score);
    $('.theQuestions').empty();
    $('.answers ol').empty();
    playGame();
}

function playGame(){
    
    $('#next').hide();
    $('#newGame').hide();
    
    $(".theQuestions").html(questionsInfinitive[currentQuestion].question);
    for (var i = 0; i < questionsInfinitive[currentQuestion].options.length; i++) {

        $(".answers ol").append("<li><button data-index='" + i + "'>" + questionsInfinitive[currentQuestion].options[i] + "</button></li>");
    }

    $("body").on('click', ".answers button", function() {

        var index = $(this).data('index');

        if (index == questionsInfinitive[currentQuestion].correctAnswer) {
            score++;
            $("span.userScore").html(score);
            currentQuestion++;
            $('.userAnswer').html("Correct!")
            if (currentQuestion >= questionsInfinitive.length) {
                $('#next').hide();
                $("span.userScore").html(score);
                $('.question_h2').empty();
                $('.question_h2').html("Vous êtes le gagneur!");
                $('button#newGame').show();
            } else {
                $('#next').show();
            }

        } else {
            $(".userAnswer").html("Incorrect! Try again.");
        }

    });
    
    $("#next").on('click', function() {
    $('#next').hide();
    $(".theQuestions").html(questionsInfinitive[currentQuestion].question);
    $(".questionNum").html(currentQuestion + 1);
    $('.userAnswer').empty();
    $('.answers ol').empty();
    for (var i = 0; i < questionsInfinitive[currentQuestion].options.length; i++) {

        $(".answers ol").append("<li><button data-index='" + i + "'>" + questionsInfinitive[currentQuestion].options[i] + "</button></li>");

        }
    });

    $("#newGame").on('click', function() {
        newGame();
    });
}
   
$(document).ready(function() {
    playGame();
});
