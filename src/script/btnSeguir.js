
/*Evento click del boton seguir llama a la funcion Seguir*/
document.getElementById("btnSeguir").onclick= function(){
    Seguir();
}

/* funcion Seguir cambio de info y cambio de colores*/
function Seguir(){   
   if(document.getElementById("btnSeguir").innerHTML=="Seguir") {
   document.getElementById("btnSeguir").innerHTML="Dejar de Seguir";
   document.getElementById("btnSeguir").style.background="darkblue";
   document.getElementById("btnSeguir").style.color="white";
    }
    else{
        document.getElementById("btnSeguir").innerHTML="Seguir";
        document.getElementById("btnSeguir").style.color="white";
        document.getElementById("btnSeguir").style.background="rgb(59,130, 246)";       
    }  
}


