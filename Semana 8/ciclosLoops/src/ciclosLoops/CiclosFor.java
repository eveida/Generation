package ciclosLoops;
import java.util.Scanner;
public class CiclosFor {

	public static void main(String[] args) {
		//El ciclo for nos genera una forma compacta de iterar falores y va a contar de su condición y su inicialización. 
		
		// For con variable local
		for (int numero =0; numero <= 10; numero++) {
			System.out.println("Numero es igual a: " + numero);
		}
		
		int contador;
		for(contador = 1; contador <= 15; contador++) {
			System.out.println("La cuenta es: " + contador);
		}
		
		//Ciclo while
		int cuenta = 0;
		while (cuenta < 10) {
			cuenta++;
			System.out.println(cuenta);
		}
		
		// Programa para un cajero
		System.out.println("Bienvenido al Banco\nElija una de lsa siguientes opciones:");
		System.out.println("1. Consultar saldo \n2. Depositar dinero\n3. Retirar\n4. Salir, tome su ticket");
		
		Scanner scr = new Scanner(System.in);
		int opcion;
		do {
			opcion = scr.nextInt();
			switch (opcion) {
			case 1: System.out.println("Cosultar Saldo");
			break;
			
			case 2: System.out.println("Ingrese la cantidad a depositar");
			break;
			
			case 3: System.out.println("Ingrese la cantidad a retirar");
			break;
			
			case 4: System.out.println("Tome su recibo.");
			break;
			
			default: System.out.println("Elija una opción válida");
			break;
			}
		} while (opcion != 4);
		scr.close();

		

	} // Main

} // Class
