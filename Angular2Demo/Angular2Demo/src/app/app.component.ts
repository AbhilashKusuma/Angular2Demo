import { Component } from "@angular/core";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'


})

export class AppComponent {
    pageheader: string = "Employee Details";
    ImgSrc: string = 'http://www.pragimtech.com/Images/Logo.JPG';
    firstName: string = "Abhilash";
    LastName: string = "Kusumaa";

    getFullName(): string {

        return (this.firstName + " " + this.LastName);
    }

    fontSize: number = 10;
    isItalic: boolean = true;
    getstyles() {
        let style = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',


        }
        return style;
    }

    onClick(): void {
        console.log('Button Clicked');
    }
}



