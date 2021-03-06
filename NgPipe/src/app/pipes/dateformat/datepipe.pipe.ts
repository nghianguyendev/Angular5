import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Constants } from '../../util/constants/Constants';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_FMT);
  }

}
