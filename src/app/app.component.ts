import { Component } from '@angular/core';
import { DataService } from './core/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeesListData: any;
  searchAddList: boolean = false;
  showOp: boolean = false;
  classToggled = false;




  constructor(private dataservice: DataService) {

  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {

    this.dataservice.getEmployees().subscribe(responseData => {
      console.log('data', responseData);
      this.employeesListData = responseData.data;
      this.employeesListData.forEach(element => {
        element.status = 'todo'
      });
      // console.log(this.employeesListData)
      if (responseData.message === 'Success') {
        console.log('data shown');

      } else {

      }
    }, error => {
      console.log(error)
    });
  }
  addBtn() {
    this.searchAddList = true
  }
  showAnimate() {
    this.showOp = !this.showOp;
    this.classToggled = !this.classToggled;
  }
  showOps(item) {
    item.status = 'done';
  }
}
