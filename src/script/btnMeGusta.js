window.onload = iniciar;
function iniciar() {
let btnMeGusta = document.getElementById("btnMeGusta");
let contadorLikes = document.getElementById("txtLike");
let likes = 200 + 1;
let texto = " Likes";

btnMeGusta.addEventListener("click", function(){
    likes;
    contadorLikes.innerHTML = "<b>" + likes + texto + "</b>";
})
}
