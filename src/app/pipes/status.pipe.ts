import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(ativo: boolean): string {
    return ativo ? "Ativo" : "Desativado";
  }

}
