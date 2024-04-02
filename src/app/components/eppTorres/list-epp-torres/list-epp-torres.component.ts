import { Component, OnInit } from '@angular/core';
import { Epptorres } from '../../../interfaces/eppTorres';

@Component({
  selector: 'app-list-epp-torres',
  templateUrl: './list-epp-torres.component.html',
  styleUrl: './list-epp-torres.component.css'
})
export class ListEppTorresComponent implements OnInit{
  Listaepptorres: Epptorres[] =[];
  p=10;
  constructor(){}
  
  ngOnInit(): void {
    this.generarRegistrosManualmente();
  }

  generarRegistrosManualmente(): void {
    // Registro 1
    const registro1: Epptorres = {
      PKepptorres: 1,
      fkUsuario: 1,
      ArnesFPosiciones: 'SI',
      MarcaArnes: 'Marca1',
      FechaFabricacionArnes: new Date(),
      ComentariosArnes: 'Comentarios1',
      BotasSeguridad: 'SI',
      Bandola: 'SI',
      FechaFabricacionBandola: new Date(),
      Guantes: 'SI',
      LestesSeguridad: 'SI',
      Mosqueton: 'SI',
      ShockAbsorbente: 'SI',
      FechaFabricacionShock: new Date(),
      SujetadorLineaVida: 'SI',
      CascoBarbiquejo: 'SI',
      Comentarios: 'Comentarios2',
      Foto1: 'Foto1',
      Foto2: 'Foto2',
      FechaLlenado: new Date(),
      FechaActualizado: new Date()
    };
  
    // Registro 2
    const registro2: Epptorres = {
      PKepptorres: 2,
      fkUsuario: 2,
      ArnesFPosiciones: 'NO',
      MarcaArnes: 'Marca2',
      FechaFabricacionArnes: new Date(),
      ComentariosArnes: 'Comentarios2',
      BotasSeguridad: 'NO',
      Bandola: 'NO',
      FechaFabricacionBandola: new Date(),
      Guantes: 'NO',
      LestesSeguridad: 'NO',
      Mosqueton: 'NO',
      ShockAbsorbente: 'NO',
      FechaFabricacionShock: new Date(),
      SujetadorLineaVida: 'NO',
      CascoBarbiquejo: 'NO',
      Comentarios: 'Comentarios2',
      Foto1: 'Foto1',
      Foto2: 'Foto2',
      FechaLlenado: new Date(),
      FechaActualizado: new Date()
    };
  
    // Agregar los registros al array
    this.Listaepptorres.push(registro1, registro2);
    console.log(this.Listaepptorres);
  }

  
}
