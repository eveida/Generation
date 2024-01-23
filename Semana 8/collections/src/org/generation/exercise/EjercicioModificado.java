package org.generation.exercise;
import java.util.ArrayList;
import java.util.Scanner;

public class EjercicioModificado {

	public static void main(String[] args) {

ArrayList<String> estudiantes = new ArrayList<String>();
		
		//Scanner para el usuario 
		Scanner scanner = new Scanner(System.in);
		String nombreEstudiante;
		
		
		
		do {
			System.out.println("Ingrese el nombre del estudiante. Escriba 'Salir' para finalizar: ");
			nombreEstudiante = scanner.nextLine();
			estudiantes.add(nombreEstudiante);
		} while(!nombreEstudiante.equalsIgnoreCase("Salir")); 

		System.out.println("**Lista de estudiantes");
		for(String estudiante : estudiantes) {
			if (!estudiante.equalsIgnoreCase("Salir")) {
				System.out.println(estudiante);
			} // if
			
		//Solicitar el índice
			
			System.out.print("¿Deseas eliminar un estudiante?");
			String respuesta = scanner.nextLine();
			 if (respuesta.equalsIgnoreCase("Sí")) {
		            System.out.println("¿Cuál es su índice?: ");
		            int indice = scanner.nextInt();
		            estudiantes.remove(indice);
		    		System.out.println(estudiantes);
		            
		            System.out.println("Código ejecutado correctamente.");
		        } else {
		            System.out.println("Programa terminado.");
		        }
			
		} // for
		
		scanner.close();
		

	} // Main

} // Class
