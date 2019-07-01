function timekeeper() {
    var currentTime = moment().format("X");
    var format1 = moment().format("dddd, MMMM Do YYYY");
    console.log(currentTime);
localStorage.feedtime
    if (localStorage.feedtime = currentTime-10) {
        
        console.log(currentTime);
        console.log("test")

      } 

      
      //document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";

    $(".boxOne").click(function (happyPet) {
        $(".petCurrentMood").html("Pet is happy!")
        $(".displayPetImg").attr("src", "images/avatar/happyAvatar.gif");
        setTimeout(defaultMood, 5000);

    });

    //feed button clicked
    //if button is clicked then default image change into happy image
    //after 4 hours with no click, change image back to default
    $(".boxTwo").click(function (hungryPet) {
        $(".petCurrentMood").html("Pet is full!")
        $(".displayFoodImg").attr("src", "images/food/apple.png");
        setTimeout(defaultFood, 2000);
        $(".displayPetImg").attr("src", "images/avatar/happyAvatar.gif");
        setTimeout(defaultMood, 5000);
        localStorage.feedtime = currentTime;

    });
}