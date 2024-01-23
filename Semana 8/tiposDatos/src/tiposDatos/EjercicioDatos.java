package tiposDatos;

public class EjercicioDatos {

	public static void main(String[] args) {
		
		System.out.println("Hola mundo");
		
		/*Comentarios multilinea*/
		//Comentarios una sola línea
		byte edad;
		edad = 15;
		// Representa un número entero y su valor es de 8bits (-128 a 127)
		System.out.println("Edad del participante " + edad);
		
		short usuarioNuevo = 200; //Sirve para representar un número entero 16 bits(-23768 a 32767)
		System.out.println("Usuario Nuevo " + usuarioNuevo);
		
		int usuariosTotales = 8752; //Sirve para representar un número entero 32 bits (-214748368 a 2147483647)
		System.out.println("Usuarios Totales " + usuariosTotales);
		
		long usuariosPremium = 9512; //Sirve para representar un número entero con valores mucho mayores
		System.out.println("Usuarios premium " + usuariosPremium);
		
		//Números con decimales
		
		float altura = 1.46f; //Sirve para datos con puntos decimales, agregar f al final del valor
		System.out.println("Estatura "+ altura);
		
		double peso = 68.200; // Va,lores numéricos don decimales, cuyo valor es de 64 bits
		
		String nombreUsuario= "Nombre";
		System.out.println(nombreUsuario);
		
		String zonaBoleto = "Zona VIP";
		
		char seccion = 'M'; //Solo un caracter y en comillas simples
		System.out.println("Seccion " + seccion);
		
		boolean clienteFreq = true;
		System.out.println("Cliente Frecuete "+ clienteFreq);
		
		//Cambio a entero 
		int pesoCambio = (int) peso; //Hace que sea entero el peso 
		System.out.println("Peso cambiado int " + pesoCambio);
		
		
		/* Operadores aritméticos
		 + suma
		 - resta
		 * multiplicación
		 / división
		 % residuo
		 */
		
		/*Operadores de comparación
		 == compara si un objeto es igual a otro
		 != si es diferente a otro
		 < menor que
		 > mayor que
		 <= menor o igual
		 >= mayor o igual
		 */
		
		//Sistema de Cine
		
		double palomitas = 89.50 ;
		double bebidas = 35.50;
		double entradas = 75.50;
		int numSalas = 10;
		int numAsientos = 50;

		int personasDentro = 342;
		if (personasDentro <= (numSalas*numAsientos)) {
			System.out.println("Aun quedan asientos");
		};
		
		double totalEntrada = personasDentro * entradas;
		double totalPalomitas = personasDentro * palomitas;
		double totalBebidas = personasDentro * bebidas;
		
		System.out.println("Total ganancias de entrada " + totalEntrada);
		System.out.println("Total ganancias de palomitas " + totalPalomitas);
	}

}
