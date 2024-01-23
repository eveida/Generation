package pruebas1;

import java.util.Scanner;

public class PruebasMate {
	public static void main(String[] args) {
		//Como hacer un ciclo FOR
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese el valor a");
		int a = scanner.nextInt();
		System.out.println("Ingrese el valor b");
		int b = scanner.nextInt();
		System.out.println("Ingrese el valor c");
		int n = scanner.nextInt();
		double q = a;
		
		for (int i =0; i< n; i++) {
			 q += (Math.pow(2, i))*b;
			 int result = (int)q;
			System.out.println(result);
		}
		scanner.close();
		
		
	}
}
