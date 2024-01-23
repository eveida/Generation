package controlDeFlujo;

import java.util.Scanner;

public class ControlDeFlujo {

	public static void main(String[] args) {
		// Debe conicidir la clase con el nombre del paquete
		// Recuerda que para que algo se ejecute, siempre debe ir en el método principal
		
		// Primero defino una variable del tipo string donde se almacena un dato 
		String viaje = null ;  //Dejo el null y después agrego fecha
		// Variable declarada e inicicaliada en null a propósito, para tener un "espacio" de memoria y solo reemplzaralo con un nuevo dato. 
		
		if (viaje != null) {
			System.out.println("Ya no tenemos fechas disponibles");
			} else {
				System.out.println("Puede reservar su viaje");
			}
		
		//Validación de contraseñas
	/*	Scanner scanner = new Scanner (System.in);
		
		//Solicitar la contraseña 
		System.out.print("Ingrese la contraseña: ");
		String passw1 = scanner.nextLine();
		
		//Verificando contraseña
		System.out.print("Ingrese nuevamente la contraseña: ");
		String passw2 = scanner.nextLine();
		
		//Verificar si las contraseñas son iguales
		if (passw1.equals(passw2)) {
			System.out.println("Las contraseñas coinciden");
		} else {
			System.out.println("Contraseñas no coinciden");
		}
		
		//Cerrar Scanner
		scanner.close();   */
		
		
		// >>> Switch <<<
		// Para seleccionar distintas opciones
		
		 Scanner scanner = new Scanner(System.in);
	        int opcion;

	            // Mostrar el menú
	            System.out.println("Menú:\n"
	            		+"1. Palomitas\n"
	            		+"2. Refresco\n"
	            		+"3. Nachos\n"
	            		+"4. Hotdog\n");

	            // Leer la opción del usuario
	            opcion = scanner.nextInt();

	            // Procesar la opción utilizando switch
	            switch (opcion) {
	              case 1:
	               System.out.println("Ha seleccionado la Opción 1. Palomitas");
	                 break;
	              case 2:
	                System.out.println("Ha seleccionado la Opción 2. Refresco");
	                 break;
	              case 3:
	                System.out.println("Ha seleccionado la Opción 3. Nachos");
	                 break;
	              case 4:
	                System.out.println("Ha seleccionado la Opción 4. Hotdog");
	                 break;
	               default:
	                 System.out.println("Opción no válida. Por favor, seleccione una opción válida.");
	            }

	        scanner.close();

	} //Main

} //Class
