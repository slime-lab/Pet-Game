//pet button clicked --
//if button is clicked then default image change into happy image
//after 2 hours with no click, change image back to default
function defaultMood() {
    $(".displayPetImg").attr("src", "images/avatar/idleAvatar.gif");
}

function defaultFood() {
    $(".displayFoodImg").attr("src", "");
} 

$(".boxOne").click(function (happyPet) {
    $(".petCurrentMood").html("Pet is happy!")
    $(".displayPetImg").attr("src", "images/avatar/happyAvatar.gif");
    setTimeout(defaultMood, 5000);

});

//feed button clicked
//if button is clicked then default image change into happy image
//after 4 hours with no click, change image back to default
$(".boxTwo").click(function (hungryPet) {
    var foods = ["images/food/apple.png", "images/food/icecream.png" , "images/food/meat.png"];
var randfoods = foods[Math.floor(Math.random() * foods.length)];
    $(".petCurrentMood").html("Pet is full!")
    $(".displayFoodImg").attr("src", randfoods);
    setTimeout(defaultFood, 2000);
    $(".displayPetImg").attr("src", "images/avatar/fullAvatar.gif");
    setTimeout(defaultMood, 5000);

});