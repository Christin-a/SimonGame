gamePattern = [];
userClickedPattern = [];


    
function nextSequence() {
    var randomNumber =  Math.floor(Math.random() * (4 - 0));

    var buttonColors = ["red", "blue", "green", "yellow"];
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).addClass("pressed").delay(100).queue(function(next){
        $(this).removeClass("pressed");
        next();
        });
  
    return randomChosenColor;
};


$(".btn").click(function () {
console.log("button was clicked");

var userChosenColor = $(this).attr("id");

var audio = new Audio("sounds/" + userChosenColor + ".mp3");
audio.play();


console.log(userChosenColor);
userClickedPattern.push(userChosenColor);

});

function playSound(name) {
   name = nextSequence();
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

   function animatePress (currentColor) {
    $(".btn").click(function () {
        $("#" + currentColor).addClass("pressed").delay(100).queue(function(next){
            $(this).removeClass("pressed");
            next(); 
        });
    });
   };
