import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardOneComponent } from './card-one/card-one.component';
import { CardThreeComponent } from './card-three/card-three.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio/card-one', component: CardOneComponent },
  { path: 'inicio/card-two', component: CardTwoComponent },
  { path: 'inicio/card-three', component: CardThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
