import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formate'
})
export class FormatePipe implements PipeTransform {

  transform(value: string="0000000000000000"): string {
    return value.replace(/\d{4}/g, (match) => `${match} `);
  }

}
