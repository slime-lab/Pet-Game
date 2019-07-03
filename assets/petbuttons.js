//ask user for pet name and save to local storage
var petName = localStorage.getItem("petName");
console.log(petName);
if (petName == null || petName == "[null]") {
    petName = prompt('Give your pet a name: ')
    localStorage.setItem("petName", petName);

};

//pet button clicked --
//if button is clicked then default image change into happy image
//after 2 hours with no click, change image back to default
var currentTime = moment().format("X");
function timeNow (){
    currentTime = moment().format("X");
}
console.log(localStorage.feedtime);
if(localStorage.feedtime != null){
$(".footer").html(petName + " was last fed at " + localStorage.feedtime)
}
console.log( currentTime-localStorage.feedtimeUnix)
function checkHungry(){
    if (currentTime -localStorage.feedtimeUnix >7200 ){
    $(".header").text(petName +" is Hungry");
    $(".displayPetImg").attr("src", "images/avatar/xAvatar.gif");

    console.log("test")
}}
function checkAttention(){
    if (currentTime -localStorage.attentiontimeUnix >15 ){
    $(".header").text(petName +" wants attention!");
    $(".displayPetImg").attr("src", "images/avatar/upsetAvatar.gif");

    console.log("test")
}}

setInterval(checkHungry,2000)
setInterval(checkAttention,2000)
setInterval(timeNow,1000)


function defaultMood() {
    $(".displayPetImg").attr("src", "images/avatar/idleAvatar.gif");
}

function defaultFood() {
    $(".displayFoodImg").attr("src", "");
}

$(".boxOne").click(function (happyPet) {
    $(".header").html(petName + " is happy!")
    $(".displayPetImg").attr("src", "images/avatar/happyAvatar.gif");
    setTimeout(defaultMood, 5000);
    localStorage.attentiontimeUnix = currentTime;

});

//feed button clicked
//if button is clicked then default image change into happy image
//after 4 hours with no click, change image back to default
$(".boxTwo").click(function (hungryPet) {
    var foods = ["images/food/apple.png", "images/food/icecream.png", "images/food/meat.png"];
    var randfoods = foods[Math.floor(Math.random() * foods.length)];
    $(".header").html(petName + " is full!")
    $(".displayFoodImg").attr("src", randfoods);
    setTimeout(defaultFood, 2000);
    $(".displayPetImg").attr("src", "images/avatar/fullAvatar.gif");
    setTimeout(defaultMood, 5000);
    var format1 = moment().format("LTS");
    localStorage.feedtimeUnix = currentTime;
    localStorage.feedtime = format1;
    $(".footer").text(petName + " was last fed at " + format1)

});