//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

let h2Element = document.querySelector("h2");
h2Element.textContent = "Generación 1 Pokémon";
console.log(h2Element.textContent);


//Cambia el color de fondo de la primera generación de Pokimon.

let infocardElement = document.querySelector('.infocard');
infocardElement.style.backgroundColor = 'pink';
console.log(infocardElement.style.backgroundColor);

//Imprime por consola la URL de la página.

console.log(window.location.href);


//Imprime por consola el dominio de la página.

console.log(window.location.hostname);


//Imprime todos los nodos de imagen.

let imgElements = document.querySelectorAll("img");
imgElements.forEach(function(img) {
    console.log(img.src);
});


//Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

imgElements.forEach(function(img) {
    img.setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
});
console.log(img.getAttribute("src"))

//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying