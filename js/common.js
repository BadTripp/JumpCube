setInterval(movimento,5)
schermoy=document.getElementById("schermo").clientHeight;
schermox=document.getElementById("schermo").clientWidth;
alt_sprite=quadrato.offsetTop;
lar_sprite=quadrato.offsetLeft;
barraSprite=document.getElementById("barra");
step=0;
step=schermox+30;
jumprange=80;
jumpspeed=1;
altezzabase=180;
function movimento(){
    quadrato=document.getElementById("quadrato");
    alt_sprite=quadrato.offsetTop;
    lar_sprite=quadrato.offsetLeft;
    lar_barra=barraSprite.offsetLeft;
    alt_barra=barraSprite.offsetTop;
    deltaTop=alt_sprite-schermoy;
    deltaLeft=lar_sprite-schermox;
    //console.log("|MonitorX:"+schermox+"|MonitorY:"+schermoy+"|XSprite:"+lar_sprite,"|YSprite:"+alt_sprite);
    
    document.addEventListener("keydown", comandi);
    if(lar_sprite == lar_barra && alt_sprite == alt_barra ){alert("Game Over!")}
    barra();
}
function barra(){
    barraSprite.style.visibility="visible";
    step-=1
    barraSprite.style.left=step+"px";
    if(barraSprite.offsetLeft == 0)
    {
        barraSprite.style.visibility="hidden";
        barraSprite.style.left=schermox+50;
        step=schermox+49;
    }
}
function comandi(event){
    var keyID = event.keyCode;
    c=0;
    if(keyID == 32){
        Isalto=setInterval(salto,13); 
    }

}
function salto(){   
    jumpspeed=alt_sprite;
    jumpspeed-=4;
    quadrato.style.top=jumpspeed+"px";  
    console.log(alt_sprite,jumprange,altezzabase,altezzabase-jumprange)

    if(alt_sprite <= altezzabase-jumprange){
        clearInterval(Isalto);
        Ibase=setInterval(base,18)
    }
}
function base(){
            jumpspeed=alt_sprite;
            jumpspeed+=4;
            quadrato.style.top=jumpspeed+"px";  
            console.log(alt_sprite,jumprange,altezzabase,altezzabase-jumprange)
            if(alt_sprite == 180){clearInterval(Ibase);}
}
