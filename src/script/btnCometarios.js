

let botonComent = document.getElementById("btnComentar")
botonComent.addEventListener("click", subirComentario)

function subirComentario(evento) {
    /*alert("cometario")*/
    evento.preventDefault();
    if(document.getElementById("txtUsuario").value!=="")
    {
    let comentario = document.getElementById("txtComentarios").value;
    let usuario=document.getElementById("txtUsuario").value
    usuario=<strong> + usuario + " " + </strong>;
    let texto=document.createTextNode(usuario + comentario);
    let parrafo=document.createElement('div');    
    // / texto=usuario+texto;
    parrafo.appendChild(texto);      
    document.getElementById("comment-box").appendChild(parrafo); 
    } 
    else
    {
        console.log("No hay nada en la caja");
    }  
    document.getElementById("txtComentarios").value="";/*borro el texto de txt comentario*/


   /*Prueba*/ 
   /* let comentario = document.getElementById("txtComentarios").value;
    let div = document.createElement("container");
    div.appendChild(document.createTextNode(comentario))    
    let parr = document.getElementById("cajacomentarios")
    parr.appendChild(div)  */


    // let botonEliminar = document.getElementById("btnEliminar")
    // botonEliminar.addEventListener("click", EliminarComentario)
    // function EliminarComentario(evento){
    //     evento.preventDefault();   
    //     parr.appendChild("");

    // }   
    

}
