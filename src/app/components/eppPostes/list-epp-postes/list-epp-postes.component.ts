import { Component, OnInit } from '@angular/core';
import { Epppostes } from '../../../interfaces/eppPostes';

@Component({
  selector: 'app-list-epp-postes',
  templateUrl: './list-epp-postes.component.html',
  styleUrl: './list-epp-postes.component.css'
})
export class ListEppPostesComponent implements OnInit{

  Listaepppostes: Epppostes[] =[];
  p=10;
  constructor() {}


  
  ngOnInit() {
    this.llenarListaepppostes();
  }

  llenarListaepppostes() {
    // Aquí llenamos el array con 5 registros de ejemplo
    for (let i = 1; i <= 5; i++) {
      const nuevoRegistro: Epppostes = {
        PKEPPPostes:i , 
        Foto1: "i", 
        Foto2: "i",
        FkUsuario: i,
        BotasDialecticas: `SI`,
        CamisasMangaLarga: `SI`,
        Pantalon: `SI`,
        GuantesCarnaza: `SI`,
        Cinturon: `NO`,
        Bandola: `SI`,
        LentesSeguridad: `SI`,
        CascoDielectrico: `NO`,
        ChalecoSeguridad: `SI`,
        Barbiquejo: `SI`,
        PulseraDeteccionVoltaje: `SI`,
        Senaletica: `SI`,
        Comentarios: `En buen estado`,
        FechaLlenado: new Date(),
        FechaActualizado: new Date()
      };

      this.Listaepppostes.push(nuevoRegistro);
    }
  }


  eliminarItem(PKepppostes: number){

  }
  verDetalles(PKepppostes: number){

  }
}
