import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[DbService]
})
export class DeleteComponent implements OnInit {

  msg:string;

  deleteEmployee(id:string){
    var e:Employee = this.db.deleteEmployeeById(id);
    if(e!=null){
      this.msg = e.id+" => Record Deleted";
    }
    else{
      this.msg = "Record Not Found";
    }
  }
  constructor(private db:DbService) { }

  ngOnInit(): void {
  }

}
