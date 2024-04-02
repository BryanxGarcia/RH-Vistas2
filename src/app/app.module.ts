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
import { FormulariosComponent } from './components/formularios/formularios.component';
import { FormsModule } from '@angular/forms';
import { CrearUniformeComponent } from './components/uniformes/CrearUniforme/CrearUniforme.component';
import { ListUniformesComponent } from './components/uniformes/ListUniformes/ListUniformes.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEppTorresComponent,
    AgregarEpptorresComponent,
    ListEppPostesComponent,
    AgregarEppPostesComponent,
    NavbarComponent,
    FormulariosComponent,
    CrearUniformeComponent,
    ListUniformesComponent,
    SiderbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    EppPostesService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
