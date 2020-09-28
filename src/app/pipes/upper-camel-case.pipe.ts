import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCamelCase',
})
export class UpperCamelCasePipe implements PipeTransform {
  transform(value: string, param: boolean = true): string {
    if (!param) {
      return value;
    }

    let arrPalabras = value.split(' ');
    arrPalabras = arrPalabras.map((item) => {
      const firstLetter = item.charAt(0).toUpperCase();
      const otherLetter = item.substr(1).toLowerCase();
      return `${firstLetter}${otherLetter}`;
    });

    return arrPalabras.join(' ');
  }
}
