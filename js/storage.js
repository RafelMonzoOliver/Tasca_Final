import { Tasca, llistaTasques } from './fom-tasca.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formularicrear");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const titol = document.getElementById("titol").value.trim();
        const descripcio = document.getElementById("descripcio").value.trim();
        const data = document.querySelector("input[type='date']").value;
        const categoria = document.getElementById("categoria").value;
        const prioritat = document.getElementById("prioritat").value;

        if (!titol || !descripcio || !data || !categoria || !prioritat) {
            alert("Omple tots els camps!");
            return;
        }

        const novaTasca = new Tasca(titol, descripcio, data, categoria, prioritat);
        llistaTasques.push(novaTasca);

        // Guardar en localStorage
        localStorage.setItem("tasques", JSON.stringify(llistaTasques));

        console.log("Tasca creada:", novaTasca);
        console.log("Llista de tasques:", llistaTasques);

        // Resetear el formulario
        form.reset();

        // Opcional: redirigir o mostrar un missatge
        alert("Tasca creada correctament!");
    });
});
