export class Categories{
    constructor(nom,color){
        this.nom = nom;
        this.color = color;
    }
    mostrarDetalls(){
        return `${this.nom},${this.color}`;
    }
}