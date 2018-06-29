import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'numberformat'
})
export class NumberformatPipe extends DecimalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // minIntegerDigits = 3 
    // minFractionDigits = 2 
    // maxFractionDigits = 5 
    return super.transform(value, "3.2-5");
  }

}
