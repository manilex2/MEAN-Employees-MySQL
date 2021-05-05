import { Component, OnInit } from '@angular/core';
//Llamar al Servicio
import { EmployeeService } from '../../services/employee.service';
//Llamar a NgForm
import { NgForm } from "@angular/forms";
//Llama a la inteface
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    //Llamar metodo getEmployees al iniciar
    this.getEmployees();
  }

  //Reinicia los valores del formulario
  resetForm(form: NgForm){
    form.reset();
    this.getEmployees();
  }

  //Llama al metodo getEmployees del servicio
  getEmployees(){
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res;
      },
      err => console.error(err)
    );
  };

  addEmployee(form: NgForm){
    //Actualiza un empleado
    if (form.value.id){
      this.employeeService.putEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset();
          alert("empleado actualizado");
        },
        err => console.error(err)
      );
      //Agrega un empleado
    } else {
      this.employeeService.createEmployee(form.value).subscribe(
        res => {
          this.getEmployees();
          form.reset();
        },
        err => console.error(err)
      );
    };
  };

  deleteEmployee(id: any){
    if (confirm('Are you sure you want to delete it?')){
      this.employeeService.deleteEmployee(id).subscribe(
        res => {
          this.getEmployees();
        },
        err => console.error(err)
      );
    };
  };

  //Tomar los valores para editar el empleado
  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }
}
