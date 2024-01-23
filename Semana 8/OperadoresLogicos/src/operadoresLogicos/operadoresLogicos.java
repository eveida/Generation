package operadoresLogicos;

public class operadoresLogicos {

	public static void main(String[] args) {
		/* &&  AND devuelve true si ambas expresiones son verdaderas
		  || OR devuelve true si cualquier condición se cumple
		  ! NOT devuelve el contrario, si es true -> false */
		
		// && AND
		int edad = 5;
		boolean tieneEntrada = true;
		if (edad <= 12 && tieneEntrada) {
			System.out.println("Tiene descuento");
		} else {
			System.out.println("Debe pagar precio completo");
		}
		
	// || OR
		 boolean esPeque = true;
		 boolean esMayor65 = false;
		 if (esPeque || esMayor65) {
			 System.out.println("Tiene descuento");
		
		 } else {
			 System.out.println("No tiene descuento");
		 }
		
		 // EJERCICIO
		 
		 int asientos = 62;
		 int costoBoleto = 350;
		 float descuentosEst = 0.3f;
		 float descuentoInapam = 0.9f;
		 int cantEstudiantes = 6;
		 int cantInapam = 4;
		 
		 int personasNormales = asientos - cantInapam -cantEstudiantes;
		 System.out.println("Boletos normales: " + personasNormales);
		 System.out.println("Boletos con descuentos: " + (cantInapam + cantEstudiantes));
		 
		 int gananciasNormales = personasNormales * costoBoleto;
		 System.out.println("Ganancias de boletos sin descuento:" + gananciasNormales);
		 
		 double gananciasBolDesc = costoBoleto * ((descuentosEst * cantEstudiantes) + (descuentoInapam * cantInapam) );
		 System.out.println("Ganancias de boletos con descuento: " + gananciasBolDesc);
		 
		 
		 
		

	}

}
