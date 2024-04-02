import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Uniforme } from '../../../interfaces/uniformes';

@Component({
  selector: 'app-crear-uniforme',
  styleUrl: './CrearUniforme.component.css',
  templateUrl: './CrearUniforme.component.html',
})
export class CrearUniformeComponent {
  uniforme: Uniforme = {
    PKUniformes: 0,
    fkUsuario: 0,
    Camisas: 0,
    Pantalones: 0,
    Sombreros: 0,
    Botas: 0,
    Chalecos: 0,
    Chamarras: 0,
    Impermeables: 0,
    Overoles: 0,
    Observaciones: '',
    FechaLlenado: new Date(),
    FechaActualizado: new Date()
  };

  onSubmit() {
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado', this.uniforme);
  }
 }
