import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// IMPORTANTE: Importa siempre el archivo base
import { environment } from '../../environments/environment'; 

export interface Empleado {
  id?: number;
  nombre: string;
  apellido?: string;
  fecha_contrato?: string; 
  puesto?: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  // Usamos la variable apiUrl del environment
  private baseUrl = environment.apiUrl;

  private urlInsertar   = `${this.baseUrl}insertar.php`;
  private urlListar     = `${this.baseUrl}get_empleados.php`;
  private urlEliminar   = `${this.baseUrl}eliminar.php`;
  private urlActualizar = `${this.baseUrl}actualizar.php`;

  constructor(private http: HttpClient) {}

  // Método para guardar un nuevo empleado (POST)
  enviarDatos(usuario:Empleado):Observable<any>{
    const headers =new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.urlInsertar, usuario,{headers});
  }

  // Nuevo método para obtener todos los empleados (GET)
  getEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.urlListar);
  }

  eliminarEmpleado(id:number):Observable<any>{
    return this.http.get(`${this.urlEliminar}?id=${id}`);
  }

  actualizarEmpleado(id:number,usuario:Empleado):Observable<any>{
    return this.http.post(this.urlActualizar,{id, ...usuario});
  }
}
