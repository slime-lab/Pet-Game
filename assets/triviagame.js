//point counter
var points = 0;
var questionTimer;
//quiz toggle
// Event listener for our quiz-button
$(".boxThree").on("click", newQuestion());

function newQuestion() {
    clearTimeout(questionTimer)
    var questionAnswered = false;


    //adding .empty funtion for quiz
    $("#correctAns").empty();

    // Storing our opentdb API URL for the quiz
    var queryURL = "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean";
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {       // After the data from the AJAX request comes back
            // for loop through the questions
            //removing for loop for correct function
            var questionUrl = response.results[0].question;
            var correct = response.results[0].correct_answer;
            var incorrect = response.results[0].incorrect_answers;
            console.log(correct)

            $(".questions").html(questionUrl)
            // var quizquestion = $("<div>");
            // var truebtn = $("<button>").text("True");
            // var falsebtn = $("<button>").text("False");
            var truebtn = $(".truebtn");
            var falsebtn = $(".falsebtn");

            // $(".quizBox").append("<br><br>");
            // $(".quizBox").append(truebtn);
            // $(".quizBox").append(falsebtn);
            //swap to default pet face function
            function defaultEmoji() {
                $(".displayPetImg").attr("src", "images/avatar/idleAvatar.gif")
            }
            //correct faceswap function
            function correctPetFace() {
                points++;
                $(".points").html("Corrent Answers: " + points);
                $(".displayPetImg").attr("src", "images/avatar/happyAvatar.gif")
                setTimeout(defaultEmoji, 2000);
                questionTimer = setTimeout(newQuestion, 2000);



            }
            //incorrect faceswap function
            function incorrectPetFace() {
                $(".displayPetImg").attr("src", "images/avatar/xAvatar.gif")
                setTimeout(defaultEmoji, 2000);
                questionTimer = setTimeout(newQuestion, 2000);

            }
            //answer click function
            truebtn.one("click", function (event) {
                if (questionAnswered == false) {
                    //changing alert to text
                    var x = "True";

                    questionAnswered = true;
                    if (x == correct) {
                        $("#correctAns").text("hey you got it!");
                        correctPetFace();

                    } else {
                        $("#correctAns").text("sorry the correct answer is:" + correct);
                        incorrectPetFace();

                    }
                }
            });
            //changing alert to text
            falsebtn.one("click", function (event) {
                if (questionAnswered == false) {

                    questionAnswered = true;
                    var y = "False";
                    if (y == correct) {
                        $("#correctAns").text("hey you got it!");
                        correctPetFace();

                    } else {
                        $("#correctAns").text("sorry the correct answer is:" + correct);
                        incorrectPetFace();
                    }
                }

            });

        });
};
