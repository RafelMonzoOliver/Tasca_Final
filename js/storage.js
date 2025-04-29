import { Categories } from './categories.js';
import { Tasca, llistaTasques } from './fom-tasca.js';


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formularicrear");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const titol = document.getElementById("titol").value.trim();
            const descripcio = document.getElementById("descripcio").value.trim();
            const data = document.querySelector("input[type='date']").value;
            const categoria = document.getElementById("categoria").value;
            const prioritat = document.getElementById("prioritat").value;

            if (!titol || !descripcio || !data || !categoria || !prioritat) {
                console.error("Omple tots els camps!");
                return;
            }

            const novaTasca = {
                titol,
                descripcio,
                data,
                categoria,
                prioritat,
                acabada: false
            };

            llistaTasques.push(novaTasca);
            localStorage.setItem("tasques", JSON.stringify(llistaTasques));

            console.log("Tasca creada correctament!");
            form.reset();
        });
    }

    const pendentsDiv = document.getElementById("Tasques pendents");
    const acabadesDiv = document.getElementById("tasques acabades");

    if (pendentsDiv && acabadesDiv) {
        const tasquesGuardades = JSON.parse(localStorage.getItem("tasques")) || [];

        tasquesGuardades.forEach((tasca, index) => {
            const tascaDiv = document.createElement("div");
            tascaDiv.classList.add("divTasca");
            switch(tasca.prioritat.toLowerCase()){
                case "alta":
                    tascaDiv.style.backgroundColor = "#f8d7da";
                    tascaDiv.style.borderRadius = "10px";
                    tascaDiv.style.width = "370px";
                    tascaDiv.style.marginLeft = "10px";
                    tascaDiv.style.marginTop = "10px";
                    break;
                case "mitja":
                    tascaDiv.style.backgroundColor = "#fff3cd";
                    tascaDiv.style.borderRadius = "10px";
                    tascaDiv.style.width = "370px";
                    tascaDiv.style.marginLeft = "10px";
                    tascaDiv.style.marginTop = "10px";
                    break;
                case "baixa":
                    tascaDiv.style.backgroundColor = "#d4edda";
                    tascaDiv.style.borderRadius = "10px"
                    tascaDiv.style.width = "370px";
                    tascaDiv.style.marginLeft = "10px";
                    tascaDiv.style.marginTop = "10px";
                    break;
                default:
                        tascaDiv.style.backgroundColor = "#f0f0f0";
            }
            tascaDiv.innerHTML = `
            <nav class="navtasca">
                <div class="divtasca">
                    <h3>${tasca.titol}</h3>
                    <p>${tasca.data}</p>
                </div>
                <div class="divtasca">
                    <div style="background-color: ${Categories.color}">
                        <p>${tasca.categoria}</p>
                    </div>

                </div>
                <div class="divtasca">
                    <p><strong>Descripció:</strong> ${tasca.descripcio}</p>
                </div>
                <div class="divtasca">
                    <p><strong>Prioritat:</strong> ${tasca.prioritat}</p>
                    <button class="botoAcabar">${tasca.acabada ? "⬛" : "⬜"}</button>
                    <button class="botoBorrar">🗑️</button>
                </div>
            </nav>
                
            `;

            const botoAcabar = tascaDiv.querySelector(".botoAcabar");
            if (!tasca.acabada) {
                botoAcabar.addEventListener("click", () => {
                    tasquesGuardades[index].acabada = true;
                    localStorage.setItem("tasques", JSON.stringify(tasquesGuardades));
                    location.reload();
                });
            } else {
                botoAcabar.disabled = true;
                botoAcabar.style.backgroundColor = "#ccc";
                tascaDiv.style.opacity = "40%";
            }

            const botoBorrar = tascaDiv.querySelector(".botoBorrar");
            botoBorrar.addEventListener("click", () => {
                tasquesGuardades.splice(index, 1);
                localStorage.setItem("tasques", JSON.stringify(tasquesGuardades));
                location.reload();
                console.log("Tasca borrada");
            });

            if (tasca.acabada) {
                acabadesDiv.appendChild(tascaDiv);
            } else {
                pendentsDiv.appendChild(tascaDiv);
            }
        });
    }
});
