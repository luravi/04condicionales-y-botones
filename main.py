def on_forever():
    # Obtener la temperatura del micro:bit
    temperatura = input.temperature()

    # Condiciones para mostrar diferentes imágenes según la temperatura
    if temperatura > 25:
        basic.show_icon(IconNames.UMBRELLA)
    elif temperatura < 10:
        basic.show_icon(IconNames.SQUARE)
    else:
        basic.show_icon(IconNames.HAPPY)

basic.forever(on_forever)
