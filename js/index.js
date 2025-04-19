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

function mostrarLlista(){
    const resultat = document.getElementById("articlellista");
    resultat.innerHTML = "";

    if(llistavcat.length === 0){
        resultat.innerHTML = `Esta vacio`;
        return;
    }

    llistavcat.forEach((novaCategoria,index)=>{
        const articlediv = document.createElement("div");
        articlediv.classList.add("articlediv");

        articlediv.innerHTML = `<div>${novaCategoria.nom},${novaCategoria.color}</div>`;
        resultat.appendChild
    });

}
