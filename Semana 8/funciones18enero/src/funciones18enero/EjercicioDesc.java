package funciones18enero;

import java.util.Scanner;

public class EjercicioDesc {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Ingrese el costo del producto: $"); //Obtener el precio del producto 
		double precioProducto = scanner.nextDouble();
		
		double porcentajeDesc = 0.10; 
		double descuento = calcularDesc(precioProducto , porcentajeDesc);
		
		double porcentajeImpuesto = 0.03;
		double impuesto = calcularImpuesto (precioProducto, porcentajeImpuesto);
		
		double total = calcularTotal(precioProducto, descuento, impuesto);
		total = redondear(total, 2);
		
		System.out.println("Precio del producto: $" + precioProducto);
		System.out.println("Descuento aplicado: $" + descuento);
		System.out.println("Impuestos: $" + impuesto);
		System.out.println("Total a pagar: $" + total);
		
		

	} //Main
	
	static double calcularDesc (double precioProducto, double porcentajeDesc) {
		return (precioProducto * porcentajeDesc); //Función para calcular descuento
	}
	
	static double calcularImpuesto (double precioProducto, double porcentajeImpuesto) {
		return (precioProducto * porcentajeImpuesto);
	}
	
	static double calcularTotal (double precioProducto, double descuento, double impuesto) {
		return (precioProducto - descuento + impuesto);
		
	}
	
	static double redondear (double valor, double decimales) {
		double factor = Math.pow(10, decimales);
		return Math.round(valor * factor)/factor;
		
	}

} //Class
