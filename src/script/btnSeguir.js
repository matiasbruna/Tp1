
/*Evento click del boton seguir llama a la funcion Seguir*/
document.getElementById("btnSeguir").onclick= function(){
    Seguir();
}

function Seguir(){   
   if(document.getElementById("btnSeguir").innerHTML=="Seguir") {
   document.getElementById("btnSeguir").innerHTML="Dejar de Seguir";
   document.getElementById("btnSeguir").style.color="black";
    }
    else{
        document.getElementById("btnSeguir").innerHTML="Seguir";
        document.getElementById("btnSeguir").style.color="white";
    }  
}

/*Evento click caja cambio de color */
const color=document.getElementsById("btnSeguir");
/*const caja=document.getElementsByIdbtn-primary");*/

let contador=0;
color.addEventListener("click",CambiarColor,true)

function CambiarColor(){
   if(contador==0){


    caja.classList.add=('rojo');
    contador=-1;

   }
   else{
    caja.classList.remove('rojo');
    contador=0;
   }
}