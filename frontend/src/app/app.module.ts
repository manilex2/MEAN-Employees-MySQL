import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importar para permitir peticiones HTTP
import { HttpClientModule } from "@angular/common/http";
//Importar para ejecutar formularios
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Llama a la clase
    HttpClientModule,
    //Llama a la clase
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
