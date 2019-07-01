



test = function test() {

$(".boxThree").on("click", modal);
var play = $(".modal");
play.hide();

function modal() {
    play.show()
}

$(".x").on("click", close);
function close(){
    play.hide();
}

};