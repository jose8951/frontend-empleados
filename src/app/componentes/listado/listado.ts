import { Component, OnInit } from '@angular/core';
import { DataService, Empleado } from '../../servicios/data';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class ListadoComponent implements OnInit {
  public listaEmpleados: Empleado[] = [];
  public idSeleccionado: number | null = null; 

  public empleadoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    fecha_contrato: new FormControl('', [Validators.required]),
    puesto: new FormControl('', [Validators.required]),
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void { 
    this.obtenerDatos(); 
  }

  obtenerDatos() {
    this.dataService.getEmpleados().subscribe({
      next: (res) => {
        this.listaEmpleados = res;
        console.log('Datos cargados:', res);
      },
      error: (err) => console.error('Error al obtener datos:', err)
    });
  }

  // Esta función limpia el formulario y sale del modo edición
  finalizarOperacion() {
    this.idSeleccionado = null;
    this.empleadoForm.reset();
    this.obtenerDatos();
  }

  // Función unificada para Insertar o Actualizar
  guardarEmpleado() {
    if (this.empleadoForm.invalid) {
      alert('Por favor, rellena todos los campos.');
      return;
    }

    const datos = this.empleadoForm.value as Empleado;

    if (this.idSeleccionado) {
      // Si hay un ID, llamamos a actualizar
      this.dataService.actualizarEmpleado(this.idSeleccionado, datos).subscribe({
        next: () => {
          alert('Empleado actualizado con éxito');
          this.finalizarOperacion();
        },
        error: (err) => console.error('Error al actualizar:', err)
      });
    } else {
      // Si no hay ID, insertamos uno nuevo
      this.dataService.enviarDatos(datos).subscribe({
        next: (res) => {
          console.log('Insertado:', res);
          this.finalizarOperacion();
        },
        error: (err) => console.error('Error al insertar:', err)
      });
    }
  }

  seleccionarEmpleado(empleado: Empleado) {
    this.idSeleccionado = empleado.id!;
    this.empleadoForm.patchValue({
      nombre: empleado.nombre,
      apellido: empleado.apellido,
      fecha_contrato: empleado.fecha_contrato,
      puesto: empleado.puesto
    });
  }

  eliminarEmpleado(id: number) {
    if (confirm("¿Estás seguro de que deseas eliminar este empleado?")) {
      this.dataService.eliminarEmpleado(id).subscribe({
        next: () => {
          this.obtenerDatos();
          console.log('Empleado eliminado');
        },
        error: (err) => console.error('Error al eliminar:', err)
      });
    }
  }
}