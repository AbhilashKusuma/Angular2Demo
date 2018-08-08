import { Component } from "@angular/core";

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})
export class EmployeeComponent {
    firstname: string = "Abhilash";
    lastname: string = "Kusuma";
    age: number = 20 

    showDetails: boolean = false;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
        console.log("Button Clicked");
    }
}