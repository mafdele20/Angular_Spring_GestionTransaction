import { Recepteur } from './Recepteur.model';
import { Emetteur } from './emetteur.model';


export interface Envoie{
    id : number ;
    montant : number;
    date : string  ;
    emetteur :Emetteur
    recepteur : Recepteur ;

}