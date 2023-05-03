let btnMeGusta = document.getElementById("btnMeGusta");
let likes = 0;

btnMeGusta.addEventListener("click", function(){
    if(likes === 0) {
        likes = 1;
        
        btnMeGusta.innerHTML = "No Me Gusta";
        btnMeGusta.style.background="blue"
        btnMeGusta.classList.remove("like");
        btnMeGusta.classList.add("dislike");
        btnMeGusta.classList.add("cambio");
        let eventoLikes = document.getElementById("txtLike");
        let contFinal = "<strong>" + 201 + " Likes" + "</strong>";
        eventoLikes.innerHTML = contFinal;
    }
    else {
        likes = 0;
        
        btnMeGusta.innerHTML = "Me Gusta";
        btnMeGusta.style.background="rgb(59,130, 246)";
        btnMeGusta.classList.remove("dislike");
        btnMeGusta.classList.add("like");
        btnMeGusta.classList.add("cambio");
        let eventoLikes = document.getElementById("txtLike");
        let contFinal = "<strong>" + 200 + " Likes" + "</strong>";
        eventoLikes.innerHTML = contFinal;
    }

});


