const iconoMenu = document.querySelector("#icono-menu");
let menu = document.querySelector("#menu");
iconoMenu.addEventListener("click", e =>{
    // Alteramos estilos para el manu y el body
    menu.classList.toggle("active");
    document.body.classList.toggle("opoacity")

    // Alteramos su atributo src para el icono del menu
    const rutaActual = e.target.getAttribute("src");
    if (rutaActual == "src/img/menu-hamburguesa.png") {
        e.target.setAttribute("src", "src/img/menu-hamburguesa2.png")
    }else{
        e.target.setAttribute("src", "src/img/menu-hamburguesa.png")
    }

    // Agregamos un iframe
    
});


