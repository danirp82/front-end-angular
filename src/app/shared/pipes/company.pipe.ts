import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'company'
})
export class CompanyPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    const filteredClients = value.filter(v => v.company.name.toLowerCase() === args[0].toLowerCase())
    return filteredClients;
  }

}
