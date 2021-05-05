//Crea una interface como objeto para organizar los datos
export interface Employee {
  name: string
  office: string
  position: string
  salary: number
  //Los "?" indican que el dato sea opcional
  createdAt?: string
  updatedAt?: string
  id?: number
}
