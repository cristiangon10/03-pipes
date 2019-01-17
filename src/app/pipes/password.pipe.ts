import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(valor: string, activar: boolean = true): any {

    if(activar)
    {
      let salida:string = "";
      for (let i=0; i< valor.length; i++)
      {
        salida += "*";
      }
      return salida;
    }else{
      return valor;
    }
  }

}
