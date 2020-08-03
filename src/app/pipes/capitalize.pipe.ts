import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class Capitalize implements PipeTransform {
    transform(str: string): string{
        return str[0].toUpperCase() + str.slice(1);
    }
}