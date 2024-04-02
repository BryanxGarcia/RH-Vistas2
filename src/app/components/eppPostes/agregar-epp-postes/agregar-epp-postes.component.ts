import { Component } from '@angular/core';
import { Epppostes } from '../../../interfaces/eppPostes';

@Component({
  selector: 'app-agregar-epp-postes',
  templateUrl: './agregar-epp-postes.component.html',
  styleUrl: './agregar-epp-postes.component.css'
})
export class AgregarEppPostesComponent {
    eppPostes: Epppostes = {
      PKEPPPostes: 0,
      FkUsuario: '',
      BotasDialecticas: '',
      CamisasMangaLarga: '',
      Pantalon: '',
      GuantesCarnaza: '',
      Cinturon: '',
      Bandola: '',
      LentesSeguridad: '',
      CascoDielectrico: '',
      ChalecoSeguridad: '',
      Barbiquejo: '',
      PulseraDeteccionVoltaje: '',
      Senaletica: '',
      Comentarios: '',
      Foto1: '',
      Foto2: '',
      FechaLlenado: new Date(),
      FechaActualizado: new Date()
    };
  
    onSubmit() {
      // Aquí puedes agregar la lógica para enviar el formulario
      console.log('Formulario enviado', this.eppPostes);
    }
  }
