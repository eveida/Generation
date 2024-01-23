package org.generation.exercise;

import java.util.ArrayList;
import java.util.Collections;

public class SortMethod {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<Integer> points = new ArrayList<Integer>();
		ArrayList<String> names = new ArrayList<String>();
		
		points.add(5);
		points.add(7);
		points.add(6);
		points.add(10);
		points.add(9);
		
		System.out.println(points); //No pone en uin orden específico
//Ordenados de mayor a menor
		Collections.sort(points);
		System.out.println(points); //Ordenados de menor a mayor
		
		names.add("folklore");
		names.add("RED");
		names.add("evermore");
		names.add("Debut");
		names.add("Lover");
		
		System.out.print(names);
		//Ordenando 
		Collections.sort(names);
		System.out.println(names);

	}

}
