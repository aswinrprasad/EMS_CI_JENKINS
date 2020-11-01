import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DbService } from '../db.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
  providers:[DbService]
})
export class InsertComponent implements OnInit {

  msg:string;

  addNewEmployee(frm:any){
    var e:Employee = this.db.addEmployee(frm.value);
    if(e!=null){
      this.msg =  "{id:"+ e.id +", name:"+e.eName+", salary:"+e.salary+"} => Record Added";
    }
    else{
      this.msg="Record with the given ID exists in the DB";
    }
  }

  constructor(private db:DbService) { }
  
  ngOnInit(): void {
  }

}
