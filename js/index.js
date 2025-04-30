import { Categories, llistavcat } from './categories.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formcateg");
    const nomInput = document.getElementById("nomcategoria");
    const colorInput = document.getElementById("color");
    const llista = document.getElementById("llistacat");

    const categoriesGuardades = JSON.parse(localStorage.getItem("categories")) || [];
    categoriesGuardades.forEach(cat => {
        const categoria = new Categories(cat.nom, cat.color);
        llistavcat.push(categoria);
        mostrarCategoria(categoria);
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nom = nomInput.value.trim();
        const color = colorInput.value;

        if (nom === "") {
            alert("Introdueix un nom de categoria!");
            return;
        }

        const nommin = nom.toLowerCase();
        const repet = llistavcat.some(cat => cat.nom.toLowerCase() === nommin);

        if(repet){
            console.error("No pot repetir categories");
            return;
        }

        //crear la categoria
        const categoria = new Categories(nom, color);
        llistavcat.push(categoria);
        mostrarCategoria(categoria);
        guardarEnLocalStorage();

        console.log("Categoria afegida:", categoria);
        console.log("Llista actual:", llistavcat);

        form.reset();
    });

    //perque es mostrin les categories una vegada son creades

    function mostrarCategoria(categoria){
        const categoriaDiv = document.createElement("div");
        categoriaDiv.classList.add("divlist");
        categoriaDiv.innerHTML = `
            <nav class="navlist">
               <span class="colorcercle" style="background-color:${categoria.color}"></span> ${categoria.nom}
            </nav>
            <nav class="navlist">
                <button class="borrarelement">borrar</button>
            </nav>`
        ;

        const borrarcat = categoriaDiv.querySelector(".borrarelement");
        borrarcat.addEventListener("click", () => {
            categoriaDiv.remove();

            const idx = llistavcat.indexOf(categoria);
            if (idx > -1) {
                llistavcat.splice(idx, 1);
                guardarEnLocalStorage();
            }

            console.log("Categoria eliminada:", categoria);
            console.log("Llista actual:", llistavcat);
        });

        llista.appendChild(categoriaDiv);
    }


    //guardar la categoria en localStorage
    function guardarEnLocalStorage() {
        localStorage.setItem("categories", JSON.stringify(llistavcat));
    }
});