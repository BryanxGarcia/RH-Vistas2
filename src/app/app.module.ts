import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEppTorresComponent } from './components/eppTorres/list-epp-torres/list-epp-torres.component';
import { AgregarEpptorresComponent } from './components/eppTorres/agregar-epptorres/agregar-epptorres.component';
import { ListEppPostesComponent } from './components/eppPostes/list-epp-postes/list-epp-postes.component';
import { AgregarEppPostesComponent } from './components/eppPostes/agregar-epp-postes/agregar-epp-postes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EppPostesService } from './services/epp-postes.service'; // Importa el servicio aquí
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListEppTorresComponent,
    AgregarEpptorresComponent,
    ListEppPostesComponent,
    AgregarEppPostesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    EppPostesService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
