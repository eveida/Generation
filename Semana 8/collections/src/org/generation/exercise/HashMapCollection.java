package org.generation.exercise;

import java.util.HashMap;
import java.util.Map;
public class HashMapCollection {
	public static void main(String[] args) {
		/*HashMap almacena elementos en pares "clave/valor" y se pudee acceder mediante index. 
		 * No es ordenado y permite datos duplicados. */
		HashMap<String, String> capitals = new HashMap<String, String>();
		
		//Agregando elementos
		capitals.put("Monterrey", "Nuevo Leon");
		capitals.put("Guadalajara", "Jalisco");
		capitals.put("Puebla", "Puebla");
		capitals.put("CDMX", "CDMX");
		capitals.put("Aguascalientes", "Aguascalientes");
		capitals.put("Xalapa", "Veracruz");
		
		System.out.println(capitals);
		
		//Método previo a .get
		//Map.Entry<> es un método de la interfaz aMap que representa una entrada en un Map. Toma como Argumento los tipos de datos asignados al HashMap. El usuario asigna el nombre de la interfaz y recibe un método .entrySet() que devuelve el conjunto de la entrada (clave-valor) en el HashMap
		
		for (Map.Entry<String, String>  entry : capitals.entrySet()){
			System.out.println(entry.getKey() + " es la capital de " + entry.getValue());
		}
		
		//Mastrar la llave (.getKey()) o clave de manera (.getValue()) individual para su manipulación
		 
		//Ejemplo 02
		Map<String, Integer> calificaciones = new HashMap<String, Integer>();
		calificaciones.put("Paolita", 10);
		calificaciones.put("Kimberly", 6);
		calificaciones.put("Vanesa", 9);
		calificaciones.put("Karina", 9);
		calificaciones.put("Evelyn", 7);
		
		for (Map.Entry<String, Integer>  calificacion : calificaciones.entrySet()){
			System.out.println("La calificacion de " + calificacion.getKey()  + " es "+ calificacion.getValue());
		}
		
		
		
	}// Main
} // Class
