import { Component } from "@angular/core";

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})
export class EmployeeComponent {
    firstname: string = "Abhilash";
    lastname: string = "Kusuma";
    age: number = 20 
}