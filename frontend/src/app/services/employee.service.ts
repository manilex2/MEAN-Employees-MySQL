import { Injectable } from '@angular/core';
//Importar para ejecutar peticiones HTTP
import { HttpClient } from "@angular/common/http";
//Importar el interface para manejar los datos
import { Employee } from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //Variable para establecer la Api de nuestro backend
  URL_API = 'http://localhost:4000/api/employees';

  //Crear un objeto vacio
  selectedEmployee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0
  };

  //Llama a la propiedad employees que contiene la interface
  employees: Employee[] = [];

  //Contructor llama al modulo HttpClient
  constructor(private http: HttpClient) { }

  /*Crea el metodo getEmployees y retorna los datos usando una peticion GET solicitando los datos
  de la interface*/
  getEmployees(){
    return this.http.get<Employee[]>(this.URL_API);
  }

  //Hace la peticion POST para agregar un empleado
  createEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }

  //Hace la peticion PUT para editar un empleado
  putEmployee(employee: Employee){
    return this.http.put(`${this.URL_API}/${employee.id}`, employee);
  }

  //Hace la peticion DELETE para eliminar un empleado
  deleteEmployee(id: number){
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
