gameengine=setInterval(movimento,5)
schermoy=document.getElementById("schermo").clientHeight;
schermox=document.getElementById("schermo").clientWidth;
alt_sprite=quadrato.offsetTop;
lar_sprite=quadrato.offsetLeft;
barraSprite=document.getElementById("barra");
quadrato=document.getElementById("quadrato");
terreno=document.getElementById("terreno");
cuore=document.getElementById("cuore");
step=0;
step=schermox+30;
jumprange=140;
jumpspeed=1;
altezzabase=quadrato.offsetTop;;
var rotazione=0;
score=0;
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
    document.getElementById("score-text").innerHTML = "Score:"+score;
    console.log(alt_sprite);
    if(isColliding(quadrato,barraSprite)){
        alert("Game Over!") ;
        clearInterval(gameengine);
    }else{barra();}
    
}
function barra(){
    
    barraSprite.style.visibility="visible";
    step-=1
    barraSprite.style.left=step+"px";
    if(barraSprite.offsetLeft == 0)
    {
        score+=1;
        barraSprite.style.visibility="hidden";
        barraSprite.style.left=schermox+50;
        step=schermox+49;
    }
}
function mobileTouch(){
    comandi(0,32);
    //console.log("t")
}
function comandi(event,t){
    if(event==0){var keyID = t;}else
    {var keyID = event.keyCode;}
    
    //console.log("t"+keyID+event )
    c=0;
    if(keyID == 32){
        Isalto=setInterval(salto,13); 
    }

}
function salto(){ 
    rotazione+=15;
    if(rotazione <= 180){quadrato.style.transform ="rotate("+rotazione+"deg)";}else{rotazione=0;}
    //console.log("R"+rotazione);
    jumpspeed=alt_sprite;
    jumpspeed-=4;
    quadrato.style.top=jumpspeed+"px";  
    //console.log(alt_sprite,jumprange,altezzabase,altezzabase-jumprange)
    if(alt_sprite <= altezzabase-jumprange){
        clearInterval(Isalto);
        Ibase=setInterval(base,5)
    }
}
function base(){
            jumpspeed=alt_sprite;
            jumpspeed+=1;
            quadrato.style.top=jumpspeed+"px";  
            //console.log(alt_sprite,jumprange,altezzabase,altezzabase-jumprange)
            if(isColliding(quadrato,terreno)){clearInterval(Ibase);}
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