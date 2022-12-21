def Kreisfahren():
    callibot.motor(KMotor.LINKS, KDir.RÜCKWÄRTS, 100)
    callibot.motor(KMotor.RECHTS, KDir.VORWÄRTS, 100)
    for index in range(100):
        led.toggle(4, 4)
        callibot.set_rgb_led(KRgbLed.LV, KRgbColor.ROT, 8)
        basic.pause(1000)
        callibot.set_rgb_led(KRgbLed.LV, KRgbColor.ROT, 0)
        led.toggle(4, 4)
    callibot.motor(KMotor.BEIDE, KDir.VORWÄRTS, 0)

def on_button_a():
    global Aktiv, Auswahl
    Aktiv = Auswahl
    if Aktiv == 1:
        BlaulichtSirene()
    elif Aktiv == 2:
        Kreisfahren()
    elif Aktiv == 3:
        pass
    elif Aktiv == 4:
        pass
    elif Aktiv == 5:
        pass
    elif Aktiv == 6:
        pass
    elif Aktiv == 7:
        pass
    else:
        basic.show_string("Fehler")
    Auswahl = 0
    Aktiv = 0
    basic.show_string("Druecke B zur Auswahl und A zum Starten.")
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def BlaulichtSirene():
    for index2 in range(100):
        callibot.set_rgb_led(KRgbLed.ALL, KRgbColor.ROT, 0)
        basic.show_leds("""
            # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
                        # . . . #
        """)
        basic.set_led_color(0xff0000)
        music.ring_tone(131)
        callibot.set_led(KMotor.LINKS, KState.AUS)
        callibot.set_led(KMotor.RECHTS, KState.AN)
        basic.pause(500)
        callibot.set_led(KMotor.LINKS, KState.AN)
        callibot.set_led(KMotor.RECHTS, KState.AUS)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.set_led_color(0x000000)
        music.ring_tone(175)
        basic.pause(500)
        callibot.set_rgb_led(KRgbLed.ALL, KRgbColor.ROT, 8)
    callibot.set_rgb_led(KRgbLed.ALL, KRgbColor.ROT, 0)
    music.stop_all_sounds()

def on_button_b():
    global Auswahl
    Auswahl += 1
    if Auswahl == 8:
        Auswahl = 1
    if Auswahl == 1:
        basic.show_string("Sirene")
    elif Auswahl == 2:
        basic.show_string("Kreisfahren")
    elif Auswahl == 3:
        pass
    elif Auswahl == 4:
        pass
    elif Auswahl == 5:
        pass
    elif Auswahl == 6:
        pass
    elif Auswahl == 7:
        pass
    else:
        basic.show_string("Fehler")
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

Aktiv = 0
Auswahl = 0
basic.show_string("Druecke B zur Auswahl und A zum Starten.")