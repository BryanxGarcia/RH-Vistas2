import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEppTorresComponent } from './components/eppTorres/list-epp-torres/list-epp-torres.component';
import { AgregarEpptorresComponent } from './components/eppTorres/agregar-epptorres/agregar-epptorres.component';
import { ListEppPostesComponent } from './components/eppPostes/list-epp-postes/list-epp-postes.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ListUniformesComponent } from './components/uniformes/ListUniformes/ListUniformes.component';
import { CrearUniformeComponent } from './components/uniformes/CrearUniforme/CrearUniforme.component';
import { AgregarEppPostesComponent } from './components/eppPostes/agregar-epp-postes/agregar-epp-postes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path: 'inicio',
  //   component: InicioComponent,
  //   data: {
  //     title: 'Inicio',
  //   }
  // },
  {
    path: 'EPPtorres',
    component: ListEppTorresComponent,
    data: {
      title: 'Equipo para torres ',
    }
  },{
    path: 'EPPtorres/crear',
    component: AgregarEpptorresComponent,
    data: {
      title: 'Crear equipo personal para torres',
    }
  },
  {
    path: 'EPPpostes',
    component: ListEppPostesComponent,
    data: {
      title: 'Equipo para postes',
    }
  },{
    path: 'EPPpostes/crear',
    component: AgregarEppPostesComponent,
    data: {
      title: 'Crear equipo personal para postes',
    }
  },
  {
    path: 'Uniformes',
    component: ListUniformesComponent,
    data: {
      title: 'Uniformes',
    }
  },{
    path: 'Uniformes/crear',
    component: CrearUniformeComponent,
    data: {
      title: 'Crear uniformes',
    }
  },
  {
    path: 'formularios',
    component: FormulariosComponent,
    data: {
      title: 'Crear uniformes',
    }
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboards',
    }
  },
  // {
  //   path: 'EPPTorres/editar/:id',
  //   component: Edit,
  //   data: {
  //     title: 'Editar producto',
  //   }
  // },npm install -g angular-cli
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
