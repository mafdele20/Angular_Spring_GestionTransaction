import { Component, OnInit } from '@angular/core';
import { Envoie} from '../model/envoie.model';
import { EnvoieService } from '../services/envoie.service';

@Component({
  selector: 'app-envoies',
  templateUrl: './envoies.component.html',
  styleUrls: ['./envoies.component.css']
})
export class EnvoiesComponent implements OnInit {

  envoies : Envoie[] = [];
  message ="";
  constructor(private envoieService: EnvoieService ) {


  }

  ngOnInit(): void {
    this.envoieService.listeEnvoies().subscribe((data: Envoie[])=>{

      this.envoies = data;

      console.log(this.envoies);
    })  

  }

  deletePost(id:any){

    this.envoieService.delete(id).subscribe(res => {

         this.envoies = this.envoies.filter(item => item.id !== id);

         console.log('Envoie deleted successfully!');

    })

  }
  }