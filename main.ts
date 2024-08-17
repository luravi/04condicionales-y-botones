let temperatura = 0
basic.forever(function () {
    // Obtener la temperatura del micro:bit
    temperatura = input.temperature()
    // Condiciones para mostrar diferentes imágenes según la temperatura
    if (temperatura > 25) {
        basic.showIcon(IconNames.Umbrella)
    } else if (temperatura < 10) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
