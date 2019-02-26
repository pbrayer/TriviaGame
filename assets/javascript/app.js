$(document).ready(function() {

    $("#restart").hide();
    $("#next").hide();
    var images = [];
    var trivia = {questions: ["How did Daenerys hatch her dragon eggs?", "What is Jon Snow's real bastard surname?", "What is the name of Arya Stark's sword?", "What is the name of Daenerys' largest Dragon?", "Why is Jaime called the 'Kingslayer'?",
                                           "Who paralyzed Bran?", "What is an alias for Beric Dondarrion?", "What houses' motto is 'As high as Honor?'"],
                         choices: ["In a lightning storm", "In a fireplace", "In a funeral pyre", "In a frozen cave", "Snow", "Sand", "Stone", "Pyke", "Hogsmeade", "Dawnbringer", "Needle", "Rapier", "Big Papa", "Viserion", "Rhaegal", "Drogon",
                        "He killed the mad king", "He killed Bowser", "He killed Ned Stark", "He killed King Joffrey", "Jaime Lannister", "Daenerys Targaryen", "Tommen Stark", "Caitlyn Stark", "Lord of Light", "The Mad King", "Charlie Brown",
                        "Lightning Lord", "House Stark", "House Arryn", "House Tully", "House Tyrell"],
                         num: [0,1,2,3,4,5,6,7],
                         correctAns: [3, 2, 3, 4, 1, 1, 4, 2]
}
    var ansNum = 0;
    var timer = 31;
    var intervalId;
    var counter = 0;
    var totalCorrect = 0;
    var totalWrong = 0;
    var unAns = 0;


    
    $("#start").on("click", function() {
        run();
        populate();
        $(this).hide()
    })
    
    $("#a1").on("click", function() {
        hideAns()
        checkAns(1)
        stop()
        $("#next").show()
    })
    $("#a2").on("click", function() {
        hideAns()
        checkAns(2)
        stop()
        $("#next").show()
    })
    $("#a3").on("click", function() {
        hideAns()
        checkAns(3)
        stop()
        $("#next").show()
    })
    $("#a4").on("click", function() {
        hideAns()
        checkAns(4)
        stop()
        $("#next").show()
    })

    $("#next").on("click", function() {
        run();
        populate();
        $(this).hide()
        $("#result").html("")
        if(ansNum === 8){
            $("#result").html("Correct answers: " + totalCorrect + "<br>" + "Wrong answers: " + totalWrong + "<br>" + "Unanswered questions: " + unAns)
            $("#question").hide()
            stop();
            $("#tremaining").hide()
        }
    })

    function checkAns(number){
        if (number == trivia.correctAns [ansNum]){
            $("#result").html("Great Job!")
            totalCorrect++
        }
        else {
            $("#result").html("Loser!")
            totalWrong++
        }
        ansNum++;
    }
    
    function populate() {
        $("#question").html(trivia.questions[ansNum])
            $("#a1").html(trivia.choices[counter])
            counter++
            $("#a2").html(trivia.choices[counter])
            counter++
            $("#a3").html(trivia.choices[counter])
            counter++
            $("#a4").html(trivia.choices[counter])
            counter++
            timer = 31;

    }
    function hideAns() {
        $("#a1").html("")
        $("#a2").html("")
        $("#a3").html("")
        $("#a4").html("")
    }

    function decrement() {

        timer--;
  
        $("#tremaining").html(timer);
  
        if (timer === 0) {
  
          stop();
  
          $("#result").html("Time's up sucka")
          hideAns();
          $("#next").show()
          unAns++
        }
      }

      function run() {
        intervalId = setInterval(decrement, 1000);
      }

      function stop() {
          clearInterval(intervalId);
      }

});

