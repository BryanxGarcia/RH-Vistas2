import { Component, OnInit } from '@angular/core';
import { Epppostes } from '../../../interfaces/eppPostes';

@Component({
  selector: 'app-list-epp-postes',
  templateUrl: './list-epp-postes.component.html',
  styleUrl: './list-epp-postes.component.css'
})
export class ListEppPostesComponent implements OnInit{

  Listaepppostes: Epppostes[] =[];
  constructor() {
  }
  ngOnInit(): void {
    this.generarRegistrosManualmente();
  }

  generarRegistrosManualmente(): void {
    // Registro 1
    const registro1: Epppostes = {
      PKEPPPostes: 1,
      FkUsuario: 'Bryan Garcia',
      BotasDialecticas: 'SI',
      CamisasMangaLarga: 'NO',
      Pantalon: 'SI',
      GuantesCarnaza: 'NO',
      Cinturon: 'SI',
      Bandola: 'NO',
      LentesSeguridad: 'SI',
      CascoDielectrico: 'NO',
      ChalecoSeguridad: 'SI',
      Barbiquejo: 'NO',
      PulseraDeteccionVoltaje: 'SI',
      Senaletica: 'NO',
      Comentarios: 'Algunos comentarios aquí',
      Foto1: 'ruta/foto1.jpg',
      Foto2: 'ruta/foto2.jpg',
      FechaLlenado: new Date(),
      FechaActualizado: new Date()
    };

    // Registro 2
    const registro2: Epppostes = {
      PKEPPPostes: 2,
      FkUsuario: 'Cristopher Bryan',
      BotasDialecticas: 'NO',
      CamisasMangaLarga: 'SI',
      Pantalon: 'NO',
      GuantesCarnaza: 'SI',
      Cinturon: 'NO',
      Bandola: 'SI',
      LentesSeguridad: 'NO',
      CascoDielectrico: 'SI',
      ChalecoSeguridad: 'NO',
      Barbiquejo: 'SI',
      PulseraDeteccionVoltaje: 'NO',
      Senaletica: 'SI',
      Comentarios: 'Más comentarios aquí',
      Foto1: 'ruta/foto1.jpg',
      Foto2: 'ruta/foto2.jpg',
      FechaLlenado: new Date(),
      FechaActualizado: new Date()
    };

    // Agregar los registros al array
    this.Listaepppostes.push(registro1, registro2);
    console.log(this.Listaepppostes);
  }
  

  eliminarItem(PKepppostes: number){

  }
  verDetalles(PKepppostes: number){

  }
}
