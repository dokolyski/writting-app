import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTilesComponent } from "../main-tiles/main-tiles.component";

const routes: Routes = [
  {
    component: MainTilesComponent,
    path: ''
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
