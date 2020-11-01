import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  
  static empList:Employee[]=[];
  

  addEmployee(emp:Employee){
    var e:Employee;
    
    for(e of DbService.empList){
      if(emp.id == e.id){
        return null;
      }
    } 

    DbService.empList.push(emp);
    console.log(emp);
    return emp;
  }

  getAllEmployees(){
    return DbService.empList;
  }

  deleteEmployeeById(id:string){
    var e:Employee;
    for(e of DbService.empList){
      if(id == e.id){
        const index = DbService.empList.indexOf(e, 0);
        DbService.empList.splice(index, 1);
        return e;
      }
    }
    return null; 
  }

  updateEmployeeDetails(emp:Employee){
    for(var e of DbService.empList){
      if(e.id == emp.id){
        e.eName = emp.eName;
        e.salary = emp.salary;
        return e;
      }
    }
    return null;
  }

  findEmployeeById(id:string){
    for(var e of DbService.empList){
      if(id == e.id){
        return e;
      }
    }
    return null;
  }
  constructor() { }
}
