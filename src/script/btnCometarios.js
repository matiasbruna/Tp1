

let botonComent = document.getElementById("btnComentar")
botonComent.addEventListener("click", subirComentario)

function subirComentario(evento) {
    
    evento.preventDefault();

    let comentario = document.getElementById("txtComentarios").value;
    let usuario = document.getElementById("txtUsuario").value;
    LimpiarAlerta();
    if(usuario!=="")
    {
        if(comentario!="")
        {    

            let div = document.getElementById("divComentarios");    
            //crea el elemento strong 
            let usuarioNegrita = document.createElement("strong");
            usuarioNegrita.textContent = usuario + ":";
            usuarioNegrita.style.marginRight = "10px"
            usuarioNegrita.style.display = "inline-block";
            //crea el elemento p y agrega espacios
            comentario = " " + comentario + "  ";
            let p = document.createElement("p");
            p.textContent = comentario;
            p.style.marginRight = "10px"
            p.style.display = "inline-block";
            //crea el boton 
            let btnEliminar = document.createElement('button');
            btnEliminar.textContent= "Eliminar"  
            btnEliminar.style.backgroundColor = "white";
            btnEliminar.style.color = "red";
            btnEliminar.style.borderRadius = "2px";
            btnEliminar.style.border = "2px solid beige ";          
            btnEliminar.style.display = "inline-block";
            // creo un espacio.
            let br = document.createElement('br')
            
            //Agrego todo lo creado
            div.appendChild(usuarioNegrita)
            div.appendChild(p);
            div.appendChild(btnEliminar);
            div.appendChild(br)

            // evento eliminar 
            btnEliminar.addEventListener('click',function(){
                div.removeChild(usuarioNegrita);
                div.removeChild(p);
                div.removeChild(btnEliminar);
                div.removeChild(br);
            });

            // Elimina el texto de la caja comentarios
            document.getElementById("txtComentarios").value = "";
           
        }
        else
        {
            Alerta("Debe ingresar un comentario primero!!");     
        }   
    }
    else
    {
        Alerta("Debe ingresar un usuario!"); 
    }    
}

function Alerta(txt){
    let divAlert = document.getElementById("divAlerta");
    let p = document.createElement("p");
    p.textContent = txt;
    p.style.color = "red"
    p.style.marginLeft= "6px"
    divAlert.appendChild(p);
}
function LimpiarAlerta(){
    let divAlert = document.getElementById("divAlerta");
    
    if (divAlert.querySelector("p")){

        let parrafos = divAlert.getElementsByTagName("p");

        for (var i = 0; i < parrafos.length; i++) {
         divAlert.removeChild(parrafos[i]);
        }
    }
}

