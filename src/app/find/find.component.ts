import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
  providers:[DbService]
})
export class FindComponent implements OnInit {

  msg:string;
  emp:Employee;
  findEmployee(e:Employee){
    this.emp = this.db.findEmployeeById(e.id);
    if(this.emp==null)
      this.msg = "No Records Match with given ID";
    else 
      this.msg="";
  }
  
  constructor(private db:DbService) { }

  ngOnInit(): void {
  }

}
