class Vehiculo {
    constructor(marca) {
        this.marca = marca
    }
    
    encender() {
        console.log(`El vehículo ${this.marca} está encendido.`);
    }
}

class Vehiculo extends Coche {
    constructor(marca, modelo) {
        this.modelo = modelo
    }
    
    mostrarDetalles() {
        console.log(`Coche: ${this.marca} ${this.modelo}`)
    }
}

miCoche.mostrarDetalles()