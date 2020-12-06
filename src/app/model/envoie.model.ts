import { Recepteur } from './Recepteur.model';
import { Emetteur } from './emetteur.model';


export class Envoie{
    id : number ;
    montant : number;
    date : string  ;
    emetteur :Emetteur
    recepteur : Recepteur ;

    constructor(){
 
    };
}