function timekeeper() {
    var currentTime = moment().format("X");
    function timeNow (){
        currentTime = moment().format("X");
    }
    console.log(localStorage.feedtime);
    $(".petCurrentMood").html("Pet was last fed at " + localStorage.feedtime)
    console.log( currentTime-localStorage.feedtimeUnix)
    function checkHungry(){
        if (currentTime -localStorage.feedtimeUnix >1 ){
        $(".isHungry").text("Pet is Hungry");
        console.log("test")
    }}
setInterval(checkHungry,2000)
setInterval(timeNow,1000)
      
      //document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";

    

    //feed button clicked
    //if button is clicked then default image change into happy image
    //after 4 hours with no click, change image back to default
    $(".boxTwo").click(function (hungryPet) {
        var format1 = moment().format("LTS");
        localStorage.feedtimeUnix = currentTime;
        localStorage.feedtime = format1;

        $(".petCurrentMood").html("Pet was last fed at " + format1)
        $(".isHungry").text("Pet is Full");
       

    });
}