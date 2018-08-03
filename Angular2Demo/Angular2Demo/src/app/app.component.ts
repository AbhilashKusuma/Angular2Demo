import { Component } from "@angular/core";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html' 
                
})

export class AppComponent
{
    pageheader: string = "Employee Details";
    ImgSrc: string = 'http://www.pragimtech.com/Images/Logo.JPG';
    firstName: string = "Abhilash";
    LastName: string = "Kusumaa";

    getFullName(): string {

        return (this.firstName + " " + this.LastName);
    }
}



