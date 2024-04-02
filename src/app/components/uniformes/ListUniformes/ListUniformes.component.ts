import { Component, OnInit } from '@angular/core';
import { Uniforme } from '../../../interfaces/uniformes';

@Component({
  selector: 'app-list-uniformes',
  templateUrl: './ListUniformes.component.html',
  styleUrl: './ListUniformes.component.css',
})
export class ListUniformesComponent implements OnInit{ 
  listaUniformes :Uniforme[] =[];

  ngOnInit(): void {
    // Llenar la tabla con datos de ejemplo
    this.listaUniformes.push({
      PKUniformes: 1,
      fkUsuario: 123,
      Camisas: 6,
      Pantalones: 5,
      Sombreros: 1,
      Botas: 1,
      Chalecos: 2,
      Chamarras: 1,
      Impermeables: 1,
      Overoles: 1,
      Observaciones: 'Sin observaciones',
      FechaLlenado: new Date(),
      FechaActualizado: new Date()
    });

    this.listaUniformes.push({
      PKUniformes: 2,
      fkUsuario: 456,
      Camisas: 6,
      Pantalones: 3,
      Sombreros: 2,
      Botas: 1,
      Chalecos: 1,
      Chamarras: 2,
      Impermeables: 1,
      Overoles: 1,
      Observaciones: 'Observaciones de ejemplo',
      FechaLlenado: new Date(),
      FechaActualizado: new Date()
    });

    this.listaUniformes.push({
      PKUniformes: 3,
      fkUsuario: 789,
      Camisas: 6,
      Pantalones: 4,
      Sombreros: 1,
      Botas: 2,
      Chalecos: 3,
      Chamarras: 1,
      Impermeables: 1,
      Overoles: 1,
      Observaciones: 'Otra observación',
      FechaLlenado: new Date(),
      FechaActualizado: new Date()
    });
  }
}
