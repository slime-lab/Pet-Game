//point counter
var points = 0;
//quiz toggle
var questionAnswered = false;
// Event listener for our quiz-button
$(".boxThree").on("click", function () {
    questionAnswered = false;
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
            // console.log(response)
            for (var i = 0; i < response.results.length; i++) {
                var questionUrl = response.results[i].question;
                var correct = response.results[i].correct_answer;
                var incorrect = response.results[i].incorrect_answers;
                console.log(correct);
                console.log(incorrect);

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
                    $(".displayPetImg").attr("src", "images/avatar/newidleAvatar.gif")
                }
                //correct faceswap function
                function correctPetFace() {
                    points++;
                    $(".points").html("Corrent Answers: " + points);
                    $(".displayPetImg").attr("src", "images/avatar/happyAvatar.gif")
                    setTimeout(defaultEmoji, 5000);

                }
                //incorrect faceswap function
                function incorrectPetFace() {
                    $(".displayPetImg").attr("src", "images/avatar/xAvatar.gif")
                    setTimeout(defaultEmoji, 5000);
                }
                //answer click function
                truebtn.on("click", function (event) {
                    //changing alert to text
                    var x = "True";
                    console.log(questionAnswered)
                    if (questionAnswered == false) {
                        questionAnswered = true;
                        if (x == correct) {
                            console.log(x)
                            $("#correctAns").text("hey you got it!");
                            correctPetFace();

                        } else {
                            $("#correctAns").text("sorry the correct answer is:" + correct);
                            incorrectPetFace();
                        }
                    }
                });
                //changing alert to text
                falsebtn.on("click", function (event) {
                    if (questionAnswered == false) {

                        questionAnswered = true;
                        var y = "False";
                        if (y == correct) {
                            console.log(questionAnswered)
                            $("#correctAns").text("hey you got it!");
                            correctPetFace();

                        } else {
                            $("#correctAns").text("sorry the correct answer is:" + correct);
                            incorrectPetFace();
                        }
                    }

                });
            };
        });
});
