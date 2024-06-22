import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TutosComponent } from './tutos/tutos.component';
import { GalerieComponent } from './galerie/galerie.component';
import { AboutComponent } from './about/about.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { Tuto1Component } from './tutos/tuto1/tuto1.component';
import { Tuto2Component } from './tutos/tuto2/tuto2.component';
import { Tuto3Component } from './tutos/tuto3/tuto3.component';
import { Tuto4Component } from './tutos/tuto4/tuto4.component';
import { Tuto5Component } from './tutos/tuto5/tuto5.component';
import { Tuto6Component } from './tutos/tuto6/tuto6.component';
import { Tuto7Component } from './tutos/tuto7/tuto7.component';
import { Tuto8Component } from './tutos/tuto8/tuto8.component';
import { Tuto9Component } from './tutos/tuto9/tuto9.component';
import { Tuto10Component } from './tutos/tuto10/tuto10.component';
import { Tuto11Component } from './tutos/tuto11/tuto11.component';
import { Tuto12Component } from './tutos/tuto12/tuto12.component';
import { Tuto13Component } from './tutos/tuto13/tuto13.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    TutosComponent,
    GalerieComponent,
    AboutComponent,
    RessourcesComponent,
    Tuto1Component,
    Tuto2Component,
    Tuto3Component,
    Tuto4Component,
    Tuto5Component,
    Tuto6Component,
    Tuto7Component,
    Tuto8Component,
    Tuto9Component,
    Tuto10Component,
    Tuto11Component,
    Tuto12Component,
    Tuto13Component,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
