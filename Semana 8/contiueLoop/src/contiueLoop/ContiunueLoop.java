package contiueLoop;

public class ContiunueLoop {

	public static void main(String[] args) {
		// Interrumpe la iteración, si se procede con una condición específica y continua a la siguiente
		
		//Con continue, ejecutancdo la sentencia condicional, pero cumpliendo la condicion del bucle for
		
		
		for (int cliente = 1; cliente <= 20; cliente++) {
			if (cliente == 5) {
				System.out.println("Cliente numero " + cliente + "¡¡GANASTE!!");
				continue;
			} System.out.println("Eres el cliente: " + cliente);
		} 

	} //Main

} //Class
