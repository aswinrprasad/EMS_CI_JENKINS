import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css'],
  providers:[DbService]
})
export class UpdateDetailsComponent implements OnInit {

  msg:string;

  updateEmployee(e:Employee){
    var emp:Employee = this.db.updateEmployeeDetails(e);
    if(emp!=null)
      this.msg = "{id:"+ emp.id +", name:"+emp.eName+", salary:"+emp.salary+"} => Record Updated";
    else
      this.msg = "Record Not Found";
  }
  constructor(private db:DbService) { }

  ngOnInit(): void {
  }

}
