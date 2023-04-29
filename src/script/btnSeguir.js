
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