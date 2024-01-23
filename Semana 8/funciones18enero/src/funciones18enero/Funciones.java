package funciones18enero;

//Hacer dos importaciones
import java.util.ArrayList ;
import java.util.List;

public class Funciones {
	static class Producto{
		String nombre;
		double precio;
		
		Producto (String nombre, double precio){
			this.nombre = nombre;
			this.precio = precio;
			
		}// Product
	}// Class producto
		
	static class CarritoCompra{
			List<Producto> productos = new ArrayList<>();
			
			void agregarProducto (Producto barbie) {
				productos.add(barbie);
			}
			
			double calcularTotal() {
				double total = 0;
				for (Producto barbie : productos) {
					total += barbie.precio;
				}
				return total;
				
			}
			
			
	}// Class Carrito
		


	public static void main(String[] args) {
		Producto muneca1 = new Producto ("Chelsea", 99.70);
		Producto muneca2 = new Producto ("Skipper", 85.40);
		
		CarritoCompra carrito = new CarritoCompra();
		
		carrito.agregarProducto(muneca1);
		carrito.agregarProducto(muneca2);
		
		double totalCarrito = carrito.calcularTotal();
		System.out.println("Total carrito $" + totalCarrito);

	} // Main

} //Class
