package org.generation.exercise;
import java.util.ArrayList;
import java.util.Scanner;
//Pohgrama que permite que un usuario agregue nombre y apellido de estudiantes matriculados en la universidad. Y hace una lista con los estudiantes agregados. 
		/* -- Requerimientos
		 * > Utilizar ArrayList
		 * > Scanner para interactuar con el usuario
		 * > Loop para repetir la acción de agregar nombres (Do- While) 
		 * > Mostrar lista de estudiantes (for- each)
		 * > Opción para salir del ciclo 'Salir' (if-else, try-catch, !=)
		 * 
		 * */
public class SistemaEscolar {
	public static void main(String[] args) {
		//Inicializar un ArrayList para guardar a los estudiantes
		ArrayList<String> estudiantes = new ArrayList<String>();
		
		//Scanner para el usuario 
		Scanner scanner = new Scanner(System.in);
		
		String nombreEstudiante;
		
		
		// Loop para permitir agregar usuarios
		do {
			
			System.out.println("Ingrese el nombre del estudiante. Escriba 'Salir' para finalizar: ");
			nombreEstudiante = scanner.nextLine();
			estudiantes.add(nombreEstudiante);
		} while(!nombreEstudiante.equals("Salir")); //Siempre que no se escriba Salir, el loop se sigue ejecutando 
		 
		//Si no quiero que se muestre la palabra Salir, agregar una condiciones
		
		// Lista hecha
		System.out.println("**Lista de estudiantes");
		for(String estudiante : estudiantes) {
			if (!estudiante.equals("Salir") || !estudiante.equals("salir")) {
				System.out.println(estudiante);
			} // if
			
		} // for
		
		scanner.close();
		
		/*
		 * Modificar nuestro programa para permitir Salir o salir 
		 * Dar la opción de eliminar un estudiante después de haberlo eliminado */
	} // Main
	
} // Class
