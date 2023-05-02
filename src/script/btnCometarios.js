

let botonComent = document.getElementById("btnComentar")
botonComent.addEventListener("click", subirComentario)

function subirComentario(evento) {
    /*alert("cometario")*/
    evento.preventDefault();
    if(document.getElementById("txtUsuario").value!=="")
    {
        if(document.getElementById("txtComentarios").value!="")
        {             
        
            let comentario = document.getElementById("txtComentarios").value;
            let usuario=document.getElementById("txtUsuario").value; 
            usuario= usuario+ " ";
            let User=document.createTextNode(usuario+" ");
            let comet=document.createTextNode(" "+comentario);
            let parrafo=document.createElement('strong');
            let comme=document.createElement('p');
            parrafo.appendChild(User);   
            comme.appendChild(comet);             
            document.getElementById("comment-box").appendChild(parrafo);
            document.getElementById("comment-box").appendChild(comet) 
            document.getElementById("txtComentarios").value="";/*borro el texto de txt comentario*/
            /*document.getElementById("comment-box").appendChild("") */    

            /*Boton eliminar*/   
                                        
            let BtnBorrarComent = document.createElement('button');                                                 
            BtnBorrarComent.textContent = "Eliminar";
            BtnBorrarComent.style.backgroundColor = "white";
            BtnBorrarComent.style.color = "red";
            BtnBorrarComent.style.borderRadius = "2px";
            BtnBorrarComent.style.border = "1px solid ";                  
            document.body.appendChild(BtnBorrarComent)
            
        }
        else
        {
            alert("Comentario vacio"); 
        }   
    }
    else
    {
        alert("Debe registrarse"); 
    }  
    document.getElementById("txtComentarios").value="";

}
