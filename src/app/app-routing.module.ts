import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnvoiesComponent } from './envoies/envoies.component';
import { FaireEnvoieComponent } from './faire-envoie/faire-envoie.component';


const routes: Routes = [
  {path: "envoies", component : EnvoiesComponent},
  {path: "faire-envoie", component : FaireEnvoieComponent},
  {path: "", redirectTo: "envoies", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
