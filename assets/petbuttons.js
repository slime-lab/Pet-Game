//pet button clicked --
//if button is clicked then default image change into happy image
//after 2 hours with no click, change image back to default
function defaultMood() {
    $(".displayPetImg").attr("src", "images/avatar/idleAvatar.gif")
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
    $(".petCurrentMood").html("Pet is full!")
    $(".displayPetImg").attr("src", "images/avatar/happyAvatar.gif");
    setTimeout(defaultMood, 5000);

});

//if button hasnt been clicked for set number of hours, avatar becomes upset
var isClicked = $('.boxOne').data('clicked');
if (isClicked != 'yes') {
    $(".displayPetImg").attr("src", "images/avatar/upsetAvatar.gif");
} else (defaultMood);

//detect if buttons are clicked
$('.boxOne').on('click', function () {
    $(this).data('clicked', 'yes');
    console.log("i clicked it!");
});

$('.boxTwo').on('click', function () {
    $(this).data('clicked', 'yes');
    console.log("i clicked it!");

});



