class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }

    encender() {
        console.log(`El vehículo ${this.marca} está encendido.`);
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca);
        this.modelo = modelo;
    }

    mostrarDetalles() {
        console.log(`Coche: ${this.marca} ${this.modelo}`);
    }
}

let miCoche = new Coche("Toyota", "Corolla");

miCoche.encender();
miCoche.mostrarDetalles();