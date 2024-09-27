class Car {
    String color;
    String model;

    // Constructor
    Car(String color, String model) {
        this.color = color;
        this.model = model;
    }

    // Method
    void displayInfo() {
        System.out.println("Car model: " + model + ", Color: " + color);
    }
}

// Usage
Car myCar = new Car("Red", "Toyota");
myCar.displayInfo();

import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4);
        
        // Using a lambda expression to print each number
        numbers.forEach(number -> System.out.println(number));
    }
}

public class Main {
    public static void main(String[] args) {
        // Variable declaration
        int x = 10;  // Mutable variable
        final int y = 20; // Constant variable

        x = 15; // Allowed
        // y = 25; // Not allowed, will cause a compile-time error

        System.out.println("x: " + x + ", y: " + y);
    }
}

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4);
        
        // Using streams to map each number to its square
        List<Integer> squares = numbers.stream()
                                        .map(n -> n * n)
                                        .collect(Collectors.toList());
        
        System.out.println(squares);
    }

    class Point {
        int x, y;
    
        Point(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            Point point = new Point(5, 10);
            
            // Simulating destructuring by accessing properties directly
            int x = point.x;
            int y = point.y;
    
            System.out.println("x: " + x + ", y: " + y);
        }
    }

    // module-info.java
module myModule {
    exports com.example.mypackage;
}

// Example package
package com.example.mypackage;

public class MyClass {
    public void display() {
        System.out.println("Hello from MyClass");
    }
}

public class Main {
    public static void main(String[] args) {
        int a = 5, b = 10;
        
        // Ternary operator
        int max = (a > b) ? a : b;
        System.out.println("Max: " + max);
    }
}

class Animal {}
class Dog extends Animal {}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();

        // Using instanceof to check the type
        if (myDog instanceof Dog) {
            System.out.println("myDog is an instance of Dog");
        }
    }
}