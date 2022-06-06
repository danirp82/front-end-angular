import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialsName'
})
export class InitialsNamePipe implements PipeTransform {

  transform(value: string | undefined): string | undefined {
    if(value){
      const nameArray = value.split(' ');

      return nameArray.map(name => {
        return name.charAt(0).toUpperCase()
      }).join('')

    } else {
      return value;
    }
  }

}
