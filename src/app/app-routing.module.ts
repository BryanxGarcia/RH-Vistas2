import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEppTorresComponent } from './components/eppTorres/list-epp-torres/list-epp-torres.component';
import { AgregarEpptorresComponent } from './components/eppTorres/agregar-epptorres/agregar-epptorres.component';
import { ListEppPostesComponent } from './components/eppPostes/list-epp-postes/list-epp-postes.component';

const routes: Routes = [
  // {
  //   path: 'inicio',
  //   component: InicioComponent,
  //   data: {
  //     title: 'Inicio',
  //   }
  // },
  {
    path: 'EPPTorres',
    component: ListEppTorresComponent,
    data: {
      title: 'Equipo para torres ',
    }
  },{
    path: 'EPPTorres/crear',
    component: AgregarEpptorresComponent,
    data: {
      title: 'Crear equipo personal para torres',
    }
  },
  {
    path: 'EPPPostes',
    component: ListEppPostesComponent,
    data: {
      title: 'Equipo para postes',
    }
  },{
    path: 'EPPPostes/crear',
    component: AgregarEpptorresComponent,
    data: {
      title: 'Crear equipo personal para postes',
    }
  },
  {
    path: 'Uniformes',
    component: ListEppTorresComponent,
    data: {
      title: 'Uniformes',
    }
  },{
    path: 'Uniformes/crear',
    component: AgregarEpptorresComponent,
    data: {
      title: 'Crear uniformes',
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
