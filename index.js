document.querySelector("button").addEventListener("click", Dice); // Dice is the function name

function Dice(){
var randomnumber=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber+".png";
var randomimagesource="images/"+randomdiceimage;
var image1=document.querySelector(".img1").setAttribute("src",randomimagesource);


var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice"+randomnumber2+".png";
var randomimagesource2="images/"+randomdiceimage2;
var image2=document.querySelector(".img2").setAttribute("src",randomimagesource2);

if(randomnumber>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnumber2>randomnumber){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
} 