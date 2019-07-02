//ask user for pet name and save to local storage
var petName = [];
petName [0] = prompt('Give your pet a name: ');
localStorage.setItem("petName", JSON.stringify(petName));
var storedNames = JSON.parse(localStorage.getItem("petName"));

// if (!petName) {
//     petName = 
//     localStorage.setItem(petName, "petname");
//     console.log(petName);

// var petName = localStorage.getItem(petName);
// if (!petName) {
//     petName = prompt('Give your pet a name: ')
//     localStorage.setItem(petName, "petname");
//     console.log(petName);

// };

//pet button clicked --
//if button is clicked then default image change into happy image
//after 2 hours with no click, change image back to default
var currentTime = moment().format("X");
function timeNow (){
    currentTime = moment().format("X");
}
console.log(localStorage.feedtime);
$(".footer").html(petName + " was last fed at " + localStorage.feedtime)
console.log( currentTime-localStorage.feedtimeUnix)
function checkHungry(){
    if (currentTime -localStorage.feedtimeUnix >7200 ){
    $(".petCurrentMood").text(petName + " is Hungry");
    console.log("test")
}}
setInterval(checkHungry,2000)
setInterval(timeNow,1000)

function defaultMood() {
    $(".displayPetImg").attr("src", "images/avatar/idleAvatar.gif");
}

function defaultFood() {
    $(".displayFoodImg").attr("src", "");
}

$(".boxOne").click(function (happyPet) {
    $(".petCurrentMood").html(petName + " is happy!")
    $(".displayPetImg").attr("src", "images/avatar/happyAvatar.gif");
    setTimeout(defaultMood, 5000);

});

//feed button clicked
//if button is clicked then default image change into happy image
//after 4 hours with no click, change image back to default
$(".boxTwo").click(function (hungryPet) {
    var foods = ["images/food/apple.png", "images/food/icecream.png", "images/food/meat.png"];
    var randfoods = foods[Math.floor(Math.random() * foods.length)];
    $(".petCurrentMood").html(petName + " is full!")
    $(".displayFoodImg").attr("src", randfoods);
    setTimeout(defaultFood, 2000);
    $(".displayPetImg").attr("src", "images/avatar/fullAvatar.gif");
    setTimeout(defaultMood, 5000);
    var format1 = moment().format("LTS");
    localStorage.feedtimeUnix = currentTime;
    localStorage.feedtime = format1;
    $(".footer").text(petName + " was last fed at " + format1)

});