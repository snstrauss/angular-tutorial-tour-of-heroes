import { Pipe, PipeTransform } from '@angular/core';

/**
 * pipes are defined using the '@Pipe' decorator
 */
@Pipe({
    name: 'capitalize'
})
export class Capitalize implements PipeTransform {
    transform(str: string): string{
        return str[0].toUpperCase() + str.slice(1);
    }
}