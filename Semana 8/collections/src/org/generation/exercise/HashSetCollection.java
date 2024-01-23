package org.generation.exercise;

import java.util.HashSet;
public class HashSetCollection {

	public static void main(String[] args) {
		//HashSet es una clase de Collections donde cada elemento es único, es decir, no se repiten los elementos. 
		HashSet<String> animals = new HashSet<String>();
		animals.add("Mapache");
		animals.add("Cuyo");
		animals.add("Capibara");
		animals.add("Suricata");
		animals.add("Tigre");
		animals.add("Perro");
		
		//Imprimir HashSet
		System.out.println(animals);
		
		// Contains()
		System.out.println(animals.contains("Capibara"));
		
		//Eliminar elemento 
		animals.remove("Tigre");
		System.out.println(animals);
		
		/*La clase HashSet no va a garantizar que los elementos se muestres según el orden establecido ya que busca eficientar la búsqueda y recuperación de elementos. */
		animals.clear();
		System.out.println(animals);
	}

}
