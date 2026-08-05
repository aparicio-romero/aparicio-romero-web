const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

const elementos = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.15
});

elementos.forEach(elemento=>{

    observer.observe(elemento);

});

/*======================================
LIGHTBOX
======================================*/

const imagenes = document.querySelectorAll(".grid-galeria img");
const lightbox = document.getElementById("lightbox");
const imagenLightbox = document.getElementById("imagen-lightbox");
const cerrar = document.querySelector(".cerrar");

if (lightbox && imagenLightbox && cerrar) {

    imagenes.forEach(imagen => {

        imagen.addEventListener("click", () => {

            imagenLightbox.src = imagen.src;
            lightbox.classList.add("activo");

        });

    });

    cerrar.addEventListener("click", () => {

        lightbox.classList.remove("activo");

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("activo");

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            lightbox.classList.remove("activo");

        }

    });

}

const progress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const porcentaje =
        (window.scrollY / total) * 100;

    progress.style.width = porcentaje + "%";

});

const botonMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (botonMenu) {

    botonMenu.addEventListener("click", () => {

        menu.classList.toggle("activo");

    });

}