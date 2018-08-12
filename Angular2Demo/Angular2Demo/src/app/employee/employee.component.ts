import { Component } from "@angular/core";

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})


export class EmployeeComponent {
    Employees: any[];
    constructor() {
        this.Employees = [
            { firstName: 'Abhilash', lastName: 'Kusuma', age: 25, sex: 'M' },
            { firstName: 'Mounika', lastName: 'Kusuma', age: 27, sex: 'F' },
            { firstName: 'Ramadevi', lastName: 'Kusuma', age: 45, sex: 'F' },
            { firstName: 'Manohar', lastName: 'Kusuma', age: 50, sex: 'M' },
        ];
    }
    getEmployees(): void {
        this.Employees = [
            { firstName: 'Abhilash', lastName: 'Kusuma', age: 25, sex: 'M' },
            { firstName: 'Mounika', lastName: 'Kusuma', age: 27, sex: 'F' },
            { firstName: 'Ramadevi', lastName: 'Kusuma', age: 45, sex: 'F' },
            { firstName: 'Manohar', lastName: 'Kusuma', age: 50, sex: 'M' },
            { firstName: 'Ash', lastName: 'Ashwini', age: 25, sex: 'F' },
        ];
    }

}

