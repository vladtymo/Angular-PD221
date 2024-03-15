import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper',
  standalone: true
})
export class FirstUpperPipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase() + value.substring(1);
  }

}
