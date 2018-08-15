import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name:'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform {

    transform(value: string, gender: string): string {
        if (gender.toLowerCase() == 'm') {

            return 'MR. ' + value;
        } else {
            return 'Miss. ' + value;
        }
    }
}