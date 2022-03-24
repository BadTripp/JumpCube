
schermo=document.getElementById("schermo")
schermoy=document.getElementById("schermo").clientHeight;
schermox=document.getElementById("schermo").clientWidth;
barraSprite=document.getElementById("barra");
quadrato=document.getElementById("quadrato");
resetbutton=document.getElementById("reset");

altezzabase=quadrato.offsetTop;
const barra_alt=barraSprite.offsetTop;
quadratoW=document.getElementById("quadrato").clientWidth;
quadratoH=document.getElementById("quadrato").clientHeight;
terreno=document.getElementById("terreno");
cuore=document.getElementById("cuore");
scorePanel=document.getElementById("score-text");
step=0;
step=schermox+30;
jumprange=140;
jumpspeed=1;
gamespeed=1;
let Isalto;
let Ibase;
let Istart;
//mobile
if(schermox > 700){gamespeed=1;}
larghezzabarra=30;
altezzabarra=0;
var rotazione=0;
score=0;
antispamkey=0;




function movimento(){


alt_sprite=quadrato.offsetTop;
lar_sprite=quadrato.offsetLeft;
lar_barra=barraSprite.offsetLeft;
alt_barra=barraSprite.offsetTop;
alt_cuore=cuore.offsetTop;
lar_cuore=cuore.offsetLeft;
deltaTop=alt_sprite-schermoy;
deltaLeft=lar_sprite-schermox;

//console.log("|MonitorX:"+schermox+"|MonitorY:"+schermoy+"|XSprite:"+lar_sprite,"|YSprite:"+alt_sprite);
document.addEventListener("keydown", comandi);
scorePanel.innerHTML = "Score:"+score;
//console.log(alt_sprite);
if(isColliding(quadrato,barraSprite)){
    // console.log(alt_sprite);
    clearInterval(gameengine);
    scorePanel.style.color = "red"; 
    scorePanel.innerHTML = "GameOver";
    resetbutton.style.visibility="visible";
    score=-1;
    
    
    
}else{barra();}

}
function barra(){

barraSprite.style.visibility="visible";
step-=gamespeed;
barraSprite.style.left=step+"px";
if(barraSprite.offsetLeft <= 0)
{   Rcaso=Math.floor(Math.random() * 1);
    
    larghezzabarra=Math.floor(Math.random() * 45)+25;
    barraSprite.style.width=larghezzabarra+"px";
    if(Rcaso==1){ altezzabarra=Math.floor(Math.random() * 10);barraSprite.style.top=barraSprite.offsetTop-altezzabarra+"px";}
    if(Rcaso==0){ altezzabarra=Math.floor(Math.random() * 2);barraSprite.style.top=barraSprite.offsetTop+altezzabarra+"px";}
    score+=1;
    if(score==5){ gamespeed=1.4;scorePanel.style.color = "green"; quadrato.style.height=quadratoH+5+"px"; quadrato.style.width=quadratoW+5+"px"; }
    if(score==7){ gamespeed=1.8;scorePanel.style.color = "orange";quadrato.style.height=quadratoH+10+"px"; quadrato.style.width=quadratoW+10+"px"}
    if(score==20){gamespeed=2.4; scorePanel.style.color = "red";}
    console.log(Rcaso,barraSprite.style.top);
    barraSprite.style.left=schermox;
    step=schermox;
}
}
function mobileTouch(){
comandi(0,32);
//console.log("t")
}
function comandi(event,t){
if(event==0){var keyID = t;}else
{var keyID = event.keyCode;}
console.log(antispamkey == 0 )
if(antispamkey == 0 ){
//console.log("t"+keyID+event )
if(keyID == 32){
    antispamkey=1;
    Isalto=setInterval(salto,13); 
    console.log("barra")
    }
}
}
function salto(){ 
if(score==-1){clearInterval(Isalto);}
document.removeEventListener("keydown", comandi);
rotazione+=5;
if(rotazione <= 180){quadrato.style.transform ="rotate("+rotazione+"deg)";}else{}

//console.log("R"+rotazione);
jumpspeed=alt_sprite;
jumpspeed-=4;
quadrato.style.top=jumpspeed+"px";  
//console.log(alt_sprite,jumprange,altezzabase,altezzabase-jumprange)
if(alt_sprite <= altezzabase-jumprange){
    clearInterval(Isalto);
    Ibase=setInterval(base,5); console.log("base")
    
}
}
function base(){
if(isColliding(quadrato,terreno)){
    clearInterval(Ibase);
    console.log("bloccato"); 
    antispamkey=0; 
    rotazione=0; 
    
}
if(score==-1){ clearInterval(Ibase); }         
        jumpspeed=alt_sprite;
        jumpspeed+=2;
        quadrato.style.top=jumpspeed+"px";  
        //console.log(alt_sprite,jumprange,altezzabase,altezzabase-jumprange)
        
}
let isColliding = function (div1, div2) {

//let d1Offset = div1.offset();
let d1offtop   = div1.offsetTop;
let d1offleft   = div1.offsetLeft;
let d1Height=div1.clientHeight;
let d1Width=div1.clientWidth;
let d1Top = div1.offsetTop + d1Height;
let d1Left = div1.offsetLeft + d1Width;

let d2offtop   = div2.offsetTop;
let d2offleft   = div2.offsetLeft;
let d2Height=div2.clientHeight;
let d2Width=div2.clientWidth;
let d2Top = div2.offsetTop + d2Height;
let d2Left = div2.offsetLeft + d2Width;

return !(d1Top < div2.offsetTop || div1.offsetTop > d2Top || d1Left < div2.offsetLeft || div1.offsetLeft > d2Left);
};

function reset(){
antispamkey=0;
score=0;
step=0;
quadrato.style.transform ="rotate(0deg)";
quadrato.style.top="42%";
if(schermox > 740){quadrato.style.left="50%";}else{quadrato.style.left=lar_sprite+"px"; quadrato.style.top=alt_sprite+"px";}
scorePanel.innerHTML = "Score:"+score;
scorePanel.style.color = "#201d1d";
barraSprite.style.left=schermox+50+"px";
Istart=setInterval(start,3000);

}
function start(){
    const alt_sprite=quadrato.offsetTop;
    const lar_sprite=quadrato.offsetLeft;
    gameengine=setInterval(movimento,5); 
    clearInterval(Istart);}