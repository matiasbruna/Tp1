let btnMeGusta = document.getElementById("btnMeGusta");
let likes = 0;


btnMeGusta.addEventListener("click", function(){
    if(likes === 0) {
        likes = 1;
        
        btnMeGusta.innerHTML = "No Me Gusta";
        btnMeGusta.classList.remove("like");
        btnMeGusta.classList.add("dislike");
        btnMeGusta.classList.add("cambio");
        let eventoLikes = document.getElementById("txtLike");
        contFinal = "<strong>" + 201 + " Likes" + "</strong>";
        eventoLikes.innerHTML = contFinal;
    }
    else {
        likes = 0;
        
        btnMeGusta.innerHTML = "Me Gusta";
        btnMeGusta.classList.remove("dislike");
        btnMeGusta.classList.add("like");
        btnMeGusta.classList.add("cambio");
        let eventoLikes = document.getElementById("txtLike");
        contFinal = "<strong>" + 200 + " Likes" + "</strong>";
        eventoLikes.innerHTML = contFinal;
    }

});


