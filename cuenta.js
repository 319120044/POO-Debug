class CuentaBancaria {
    #saldo

    constructor(titular, saldoInicial) {
        this.titular = titular
        this.#saldo = saldoInicial
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad
            console.log(`Depósito exitoso. Nuevo saldo: $${this.#saldo}`)
        }
    }
}

const cuentaJuan = new CuentaBancaria("Juan Pérez", 1500)
console.log(`El saldo actual de Juan es: $${cuentaJuan.#saldo}`)