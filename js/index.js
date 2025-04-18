import { Categories, llistavcat } from './Categories.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formcateg");
    const nomInput = document.getElementById("nomcategoria");
    const colorInput = document.getElementById("color");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nom = nomInput.value.trim();
        const color = colorInput.value;

        if (nom === "") {
            alert("Introdueix un nom de categoria!");
            return;
        }

        const novaCategoria = new Categories(nom, color);
        llistavcat.push(novaCategoria);

        console.log("Categoria afegida:", novaCategoria);
        console.log("Llista actual:", llistavcat);

        form.reset();
    });
});
