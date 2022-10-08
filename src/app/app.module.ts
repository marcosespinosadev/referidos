import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { CardThreeComponent } from './card-three/card-three.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
