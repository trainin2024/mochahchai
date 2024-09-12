

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter'
})
export class CurrencyFormatterPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'USD', locale: string = 'en-US'): string {
    if (isNaN(value)) {
      return '';
    }
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode }).format(value);
  }
}
