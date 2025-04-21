export const llistaTasques = JSON.parse(localStorage.getItem("tasques")) || [];

export class Tasca{
    constructor(titol,descripcio,data,categoria,prioritat){
        this.titol = titol;
        this.descripcio = descripcio;
        this.data = data;
        this.categoria = categoria;
        this.prioritat = prioritat;
    }
}

