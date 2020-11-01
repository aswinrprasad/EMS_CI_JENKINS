import { Component, OnInit } from '@angular/core';
import { InsertComponent } from '../insert/insert.component';
import { DbService } from '../db.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.css'],
  providers : [DbService]
})
export class FindAllComponent implements OnInit {

  empList:Employee[]=[];
  getEmpListFromDb(){
    this.empList= this.db.getAllEmployees();
    if(this.empList.length >0){
      return 1;
    }
    else{
      return 0;
    }
  }
  constructor(private db:DbService) {}
  ngOnInit(): void {
  }

}
