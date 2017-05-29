var panel = $('#quiz');

// Click Functions
$(document).on('click', '#start', function() {
  game.start();
});

$(document).on('click', '#done', function() {
  game.done();
});

// Question Object Array
var questions = [{
  question: "1 . Who is the current President of the United States?",
  answers: ["Donald Trump", "Mickey Mouse", "Michael Pence", "Jen Doe"],
  correctAnswer: "Donald Trump"
}, {
  question: "2 . Who is the current Vice President of the United States?",
  answers: ["Donald Trump", "Mickey Mouse", "Michael Pence", "Jen Doe"],
  correctAnswer: "Michael Pence"
}, {
  question: "3 . Who is the current Secretary of State of the United States?",
  answers: ["James Mattis", "Rex Tillerson", "Wilbur Ross", "Jeff Sessions"],
  correctAnswer: "Rex Tillerson"
}, {
  question: "4 . Who is the current Secretary of Treasury of the United States?",
  answers: ["Sonny Perdue", "Rex Tillerson", "Steve Mnuchin", "Jeff Sessions"],
  correctAnswer: "Steve Mnuchin"
}, {
  question: "5 . Who is the current Secretary of Defence of the United States?",
  answers: ["James Mattis", "Rex Tillerson", "Steve Mnuchin", "Jeff Sessions"],
  correctAnswer: "James Mattis"
}, {
  question:  "6 . Who is the current Attorney General of the United States?",
  answers: ["Alex Acosta", "Rex Tillerson", "Steve Mnuchin", "Jeff Sessions"],
  correctAnswer: "Jeff Sessions"
}, {
  question: "7 . Who is the current Secretary of Agriculture of the United States?",
  answers: ["Sonny Perdue", "Rex Tillerson", "Steve Mnuchin", "Jeff Sessions"],
  correctAnswer: "Sonny Perdue"
}];

// The Game Algorithm
var game = {
  correct:0,
  incorrect:0,
  counter:45,

// The CountDown Function
  countDown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      game.done();
    }
  },
  
  // The start function starts the timer at 45 then counts down using the countDown function
  start: function() {

    timer = setInterval(game.countDown, 1000);
    $('#subWrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var n = 0; n < questions[i].answers.length; n++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[n] + '">' + questions[i].answers[n]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },

  // Check Answers
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },

  //Display result function
  result: function() {
    clearInterval(timer);
    $('#subWrapper h2').remove();
    panel.html('<h2>All Done!</h2><br/>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }
};