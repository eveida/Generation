package generations.collections;

import java.util.ArrayList;
import java.util.Arrays;

public class ArraylistCollections {
	public static void main (String[] args) {
		
		// *** ARRAYS ****
		String[] names = {"Kimberly", "Paola", "Wendy", "Rosita", "Evelyn", "Karina"};
		//Imprimiendo Arrays
		System.out.println(Arrays.toString(names));
		
		
		// Arrays de enteros
		int[] edades = {31, 32, 30, 28};
		System.out.println(Arrays.toString(edades));
		
		//Acceder a cada elemento del Array
		String name1 = names[0];
		System.out.println("El primer nombre de la lista es " + name1);
		
		int edad1 = edades[1];
		System.out.println("La edad de " + name1 + " es de " + edad1);
		
		int longitudNames = names.length;
		System.out.println("El clan de las perdidas tiene " + longitudNames + " elementos" );
		
		//Obtener el último elemento 
		String ultimoElemento = names[longitudNames - 1];
		System.out.println("La última integrante es " + ultimoElemento);
		
		//Mostrar cada elemento usando un For Each
		for(String name : names) {
			System.out.println (name);
		}
		
		// Array list: es un array que puede cambiar de tamaño. Es la clase de Java que representa una estructura de datos de Arrays. Permite elementos duplicados y recibe varios métodos de manipulación. 
		
		ArrayList<String> films = new ArrayList <String>();
		ArrayList<Integer> mesuras = new ArrayList <Integer>();
		
		//Agregar elementos
		films.add("Mean Girls");
		films.add("Se7en");
		films.add("Frozen");
		films.add("Zombieland");
		films.add("Finding Nemo");

		
		System.out.println(films);
		//Obtener un elemento name.get(index);
		String film1 = films.get(0);
		System.out.println("La primer prelícula es: " + film1);
		
		//Modificar un elemento; name.set(index, newValue);
		String film3 = films.set(3, "Weathering with you");
		String film3Get = films.get(3);
		System.out.println(films);
		
		//Conocer el tamaño del ArrayList : name.size();
		int sizeFilms = films.size();
		System.out.print("El tamaño del ArrayList films es de " + sizeFilms + "elementos");
		
		//Agregar un elemento y después eliminarlo : name.remove(index);
		films.add("The Era Tour");
		System.out.println(films);
		
		films.remove(1);
		System.out.println(films);
		
		System.out.println(">>> Films en la lista <<<");
		for (String film : films) {
			System.out.println(film);
		}
	}// Main

}// Class
