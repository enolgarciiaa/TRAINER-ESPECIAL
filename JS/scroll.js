
//Creamos una clase para nuestro navbar al hacer scroll y una funcion para que se active al hacer scroll.

const navbar = document.getElementById('navbar');

function scrollnavbar(){
    if(window.scrollY > 100){
        navbar.classList.add('nav-scroll');
    }else{
        navbar.classList.remove('nav-scroll');
    }
}

window.addEventListener('scroll', scrollnavbar);