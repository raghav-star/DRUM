var totalButton=document.querySelectorAll(".drum").length;


for(var i=0;i<totalButton;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",onPressed);
}
function playAudio(pressedKey){
  var tom1=new Audio("sounds/tom-1.mp3");
  var tom2=new Audio("sounds/tom-2.mp3");
  var tom3=new Audio("sounds/tom-3.mp3");
  var tom4=new Audio("sounds/tom-4.mp3");
  var snare=new Audio("sounds/snare.mp3");
  var crash=new Audio("sounds/crash.mp3");
  var kick=new Audio("sounds/kick-bass.mp3");
  switch(pressedKey)
  {
    case 'w':
      console.log("tom1");
    tom1.play();
    break;

    case 'a':
    console.log("tom2");
    tom2.play();
    break;

    case 's':
    tom3.play();
    break;

    case 'd':
    tom4.play();
    break;

    case 'j':
    snare.play();
    break;

    case 'l':
    crash.play();
    break;

    case 'k':
    kick.play();
    break;
  }
}


function onPressed(){

  var pressedKey=this.innerHTML;

  playAudio(pressedKey);
  addAnimation(pressedKey);

}
document.addEventListener("keypress",function(event){
  // alert("heyyy");
  console.log(event.key);
  playAudio(event.key);
  addAnimation(event.key);
});

function addAnimation(activeKey){
  var myKey=document.querySelector("."+activeKey);
  myKey.classList.add("pressed");
  setTimeout(function(){myKey.classList.remove("pressed")},100);
}
