import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators} from '@angular/forms';

import { EnvoieService } from '../services/envoie.service';
import { Envoie } from '../model/envoie.model';



@Component({
  selector: 'app-faire-en  voie',
  templateUrl: './faire-envoie.component.html',
  styleUrls: ['./faire-envoie.component.css']
})
export class FaireEnvoieComponent implements OnInit {

  form  : FormGroup ;

  constructor( public envoieService : EnvoieService,private router: Router ) { 
       

  }


  ngOnInit(): void {
      this.form = new FormGroup({
        montant: new FormControl('', [Validators.required]),

        date: new FormControl('', Validators.required),

        nomE: new FormControl('', [Validators.required]),
        prenomE: new FormControl('', Validators.required),
        telE: new FormControl('', [Validators.required]),

        cinE: new FormControl('', Validators.required),
        nomR: new FormControl('', Validators.required),
        prenomR: new FormControl('', Validators.required),
        telR: new FormControl('', [Validators.required]),
    });
  }


    
  get f(){

    return this.form.controls;

  }
  submit(){
    let envoie = {} as Envoie;

    {
      envoie.date = this.form.value.date,
      envoie.montant =this.form.value.montant,
      envoie.emetteur = {
         nomE : this.form.value.nomE,
         prenomE : this.form.value.prenomE,
         telE : this.form.value.telE,
         cinE : this.form.value.cinE
      },
      envoie.recepteur = {

           nomR : this.form.value.nomR,
           prenomR :this.form.value.prenomR,
           telR : this.form.value.telR
      }
  }
    console.log(envoie);


    this.envoieService.faireEnvoie(envoie).subscribe(res => {

      
         console.log('Envoie created successfully!');

         this.router.navigateByUrl('envoies');

    })

  }

}
