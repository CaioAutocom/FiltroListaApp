import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALIDADDRESS = !address || !address.rua || !address.cidade;
    
    if (INVALIDADDRESS) return "Não foi possível recuperar o endereço.";

    return `${address.rua}, ${address.numero}, ${address.cidade}, ${address.estado}, ${address.pais}.`;
  }

}
