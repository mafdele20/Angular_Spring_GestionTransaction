import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators} from '@angular/forms';

import { EnvoieService } from '../services/envoie.service';
import { Envoie } from '../model/envoie.model';
import { Emetteur } from '../model/emetteur.model';
import { Recepteur } from '../model/Recepteur.model';


@Component({
  selector: 'app-faire-en  voie',
  templateUrl: './faire-envoie.component.html',
  styleUrls: ['./faire-envoie.component.css']
})
export class FaireEnvoieComponent implements OnInit {
   
  envoie = {
    montant :"" ,
    date : "",
    emetteur : {
      nomE : "",
      prenomE : "",
      telE : "",
    },
    recepteur : {
      cinE :"",
      nomR : "",
      prenomR : "",
      telR : "",
    }
   
   
  }
   

  constructor( public envoieService : EnvoieService,private router: Router ) { 
       

  }


  ngOnInit(): void {
     
  }


    

  submit(){
     
    console.log(this.envoie);

    this.envoieService.faireEnvoie(this.envoie).subscribe(res => {

         console.log('Envoie created successfully!');

         this.router.navigateByUrl('envoies');

    })

  }

}
