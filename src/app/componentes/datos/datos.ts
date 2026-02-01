import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { DataService } from '../../servicios/data'; 

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './datos.html',
  styleUrl: './datos.css',
})
export class DatosComponent {
  usuario = {
    nombre: '',
    email: ''
  };

  constructor(private dataService: DataService) {}

  enviarFormulario() {
    console.log('Enviando datos a PHP...', this.usuario);
    this.dataService.enviarDatos(this.usuario).subscribe({
      next: (resultado) => {
        alert('Servidor dice: ' + resultado.msg);
      },
      error: (fallo) => {
        alert('No se pudo conectar con el archivo PHP en Apache.');
      }
    });
  }
}