import { Component } from '@angular/core';
import { APIServiceService } from './../Services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Constructor del componente que recibe una instancia del servicio APIServiceService.
  constructor(private api: APIServiceService) {}

  // Método para obtener datos de un Pokémon dado su ID.
  getPokemonDataID(id: number) {
    try {
      let pokemon;  // Declara una variable local para almacenar el nombre del Pokémon.

      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getPokemonID(id).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        pokemon = response.name;
        // Imprime el nombre del Pokémon en la consola.
        console.log(pokemon);
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }
}