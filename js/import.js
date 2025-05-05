document.addEventListener("DOMContentLoaded", () => {
    const buttonPujar = document.getElementById("pujar");
    const inputJSON = document.getElementById("inputJSON");

        buttonPujar.addEventListener("click", async () => {
            const nomFitxer = inputJSON.value.trim();
            //en cas de no posar nom al fitxer
            if (!nomFitxer) {
                console.error("Posa el nom del fitxer");
                return;
            }

            try {
                //per aixi fer un fetch del fitxer assignat
                const resposta = await fetch(`/json/${nomFitxer}.json`);
                //en cas d'error si el fitxer no existeix
                if (!resposta.ok) {
                    console.error("No s'ha pogut carregar l'arxiu");
                }

                const tasquesDelFitxer = await resposta.json();

                //llista de importar
                const tasquesActuals = JSON.parse(localStorage.getItem("tasques")) || [];

                tasquesDelFitxer.forEach(tasca => {
                    
                    //per comprobar si existeix la tasca
                    const titol = tasca.titol?.trim() || "Sense títol";
                    const existeix = tasquesActuals.some(t => t.titol.trim().toLowerCase() === titol.toLowerCase());
                
                    //en cas de que no existeixi la tascamla cream
                    if (!existeix) {
                        tasquesActuals.push({
                            titol,
                            descripcio: tasca.descripcio || "",
                            data: tasca.data || "",
                            categoria: tasca.categoria || "Sense categoria",
                            prioritat: tasca.prioritat || "baixa",
                            acabada: tasca.acabada || false
                        });
                    } else {
                        console.error(`Tasca "${titol}" ja existeix i no s'ha afegit.`);
                    }
                });

                //Per guaredar les tasques al localStorage
                localStorage.setItem("tasques", JSON.stringify(tasquesActuals));
                console.log("Tasques carregades correctament!");
                location.reload(); 
            } catch (error) {
                //en cas de que algo no funcioni
                console.error("Error carregant l'arxiu:", error);
            }
        });
});
