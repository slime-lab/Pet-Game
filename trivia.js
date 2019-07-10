// Event listener for our quiz-button
$("#quiz-button").on("click", function () {
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

                $("#body").html(questionUrl)
                var quizquestion = $("<div>");
                var truebtn = $("<button>").text("True");
                var falsebtn = $("<button>").text("False");

                $("#body").append("<br><br>");
                $("#body").append(truebtn);
                $("#body").append(falsebtn);

                truebtn.on("click", function (event) {
                    var x = "True";
                    console.log(correct)

                    if (x == correct) {
                        console.log(x)
                        $("#correctAns").text("true is the correct answer"); 
                    } else {
                        alert ("not correct");
                    }
                });

                falsebtn.on("click", function (event) {
                    var y = "False";
                    if (y == correct) {
                        console.log(y)
                        $("#correctAns").text("false is the correct answer"); 
                    } else {
                        alert ("not correct!");
                    }

                });
            };
        });
});