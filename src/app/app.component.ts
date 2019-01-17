import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Cristian"
  nombre2 = "CriStiAn aNdRes gonZalEz muÑoz"

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  asas = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 467,
    direccion: {
      calle: 50,
      casa: 42
    }

  }

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego la data'), 3500);
  });

  fecha = new Date();

  video = "op07UzSCu4c";

  activar:boolean = false;
}
