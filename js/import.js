document.addEventListener("DOMContentLoaded", () => {
    const btnPujar = document.getElementById("pujar");
    const inputJSON = document.getElementById("inputJSON");

        btnPujar.addEventListener("click", async () => {
            const nomFitxer = inputJSON.value.trim();
            if (!nomFitxer) {
                console.error("Introdueix el nom del fitxe");
                return;
            }

            try {
                const resposta = await fetch(`/json/${nomFitxer}.json`);
                if (!resposta.ok) throw new Error("No s'ha pogut carregar l'arxiu");

                const tasquesDelFitxer = await resposta.json();

                const tasquesActuals = JSON.parse(localStorage.getItem("tasques")) || [];
                tasquesDelFitxer.forEach(tasca => {

                    tasquesActuals.push({
                        titol: tasca.titol || "Sense títol",
                        descripcio: tasca.descripcio || "",
                        data: tasca.data || "",
                        categoria: tasca.categoria || "Sense categoria",
                        prioritat: tasca.prioritat || "baixa",
                        acabada: tasca.acabada || false
                    });
                });

                localStorage.setItem("tasques", JSON.stringify(tasquesActuals));
                console.log("Tasques carregades correctament!");
                location.reload(); 
            } catch (error) {
                console.error("Error carregant l'arxiu:", error);
                console.error("Error en carregar l'arxiu. Comprova que existeix i està ben formatat.");
            }
        });
});
