import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obtenerImg'
})
export class ObtenerImgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
