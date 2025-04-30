import { Categories } from './categories.js';

document.addEventListener("DOMContentLoaded", () => {
    const selectCategoria = document.getElementById("categoria");

    //Per fer que les categories s'actualitzin en el formulari de crear tasques
    if (!selectCategoria) return;

    const categoriesGuardades = JSON.parse(localStorage.getItem("categories")) || [];

    categoriesGuardades.forEach(cat => {
        const categoria = new Categories(cat.nom, cat.color);
        const option = document.createElement("option");
        option.value = categoria.nom;
        option.textContent = categoria.nom;
        selectCategoria.appendChild(option);
    });
});
