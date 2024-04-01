import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEppTorresComponent } from './components/eppTorres/list-epp-torres/list-epp-torres.component';
import { AgregarEpptorresComponent } from './components/eppTorres/agregar-epptorres/agregar-epptorres.component';
import { ListEppPostesComponent } from './components/eppPostes/list-epp-postes/list-epp-postes.component';
import { AgregarEppPostesComponent } from './components/eppPostes/agregar-epp-postes/agregar-epp-postes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEppTorresComponent,
    AgregarEpptorresComponent,
    ListEppPostesComponent,
    AgregarEppPostesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
