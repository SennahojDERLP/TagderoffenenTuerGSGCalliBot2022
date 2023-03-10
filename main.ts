function Kreisfahren () {
    callibot.motor(KMotor.links, KDir.vorwärts, 100)
    callibot.motor(KMotor.rechts, KDir.vorwärts, 50)
    for (let index = 0; index < 10; index++) {
        callibot.setRgbLed(KRgbLed.RV, KRgbColor.gelb, 8)
        callibot.setLed(KMotor.rechts, KState.an)
        led.plot(0, 4)
        basic.pause(1000)
        led.unplot(0, 4)
        callibot.setLed(KMotor.rechts, KState.aus)
        callibot.setRgbLed(KRgbLed.RV, KRgbColor.gelb, 0)
    }
    callibot.motorStop(KMotor.beide, KStop.Frei)
}
function Messen () {
    for (let index = 0; index < 4; index++) {
        basic.showString("" + input.temperature() + "°C")
        basic.pause(1000)
        if (input.temperature() <= 10 || input.temperature() >= 35) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        } else if (input.temperature() >= 25) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                `)
        }
        basic.pause(1000)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Aktiv = Auswahl
    if (Aktiv == 1) {
        BlaulichtSirene()
    } else if (Aktiv == 2) {
        Kreisfahren()
    } else if (Aktiv == 3) {
        Vorwaertszurueck()
    } else if (Aktiv == 4) {
        GL380()
    } else if (Aktiv == 5) {
        Messen()
    } else if (Aktiv == 6) {
        _()
    } else if (Aktiv == 7) {
        for (let index = 0; index < 5; index++) {
            basic.showString(Impressum)
        }
    } else {
        basic.showString("Fehler")
    }
    Auswahl = 0
    Aktiv = 0
})
function BlaulichtSirene () {
    for (let index = 0; index < 15; index++) {
        callibot.setRgbLed(KRgbLed.All, KRgbColor.rot, 0)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.setLedColor(0x0000ff)
        music.ringTone(131)
        callibot.setLed(KMotor.links, KState.aus)
        callibot.setLed(KMotor.rechts, KState.an)
        basic.pause(500)
        callibot.setLed(KMotor.links, KState.an)
        callibot.setLed(KMotor.rechts, KState.aus)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.setLedColor(0x000000)
        music.ringTone(175)
        basic.pause(500)
        callibot.setRgbLed(KRgbLed.All, KRgbColor.rot, 8)
    }
    callibot.setRgbLed(KRgbLed.All, KRgbColor.rot, 0)
    music.stopAllSounds()
}
function Vorwaertszurueck () {
    for (let index = 0; index < 5; index++) {
        callibot.motor(KMotor.beide, KDir.vorwärts, 50)
        basic.pause(2000)
        callibot.motorStop(KMotor.beide, KStop.Frei)
        callibot.motor(KMotor.beide, KDir.rückwärts, 50)
        basic.pause(2000)
        callibot.motorStop(KMotor.beide, KStop.Frei)
    }
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Auswahl += 1
    if (Auswahl == 8) {
        Auswahl = 1
    }
    if (Auswahl == 1) {
        basic.showString("Sirene")
    } else if (Auswahl == 2) {
        basic.showString("Kreisfahren")
    } else if (Auswahl == 3) {
        basic.showString("Fahren")
    } else if (Auswahl == 4) {
        basic.showString("GL380")
    } else if (Auswahl == 5) {
        basic.showString("Temperatur")
    } else if (Auswahl == 6) {
        basic.showString("'???")
    } else if (Auswahl == 7) {
        basic.showString("Impressum")
    } else {
        basic.showString("Fehler")
    }
})
function _ () {
    Countdown = 100
    while (Countdown != 0) {
        basic.showNumber(Countdown)
        Countdown += -1
    }
    while (150 >= music.tempo()) {
        music.setTempo(100)
        music.playMelody("C E G B C5 B F C ", 120)
        music.setTempo(music.tempo() + 1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playMelody("C E G B C5 B F C ", music.tempo())
        music.setTempo(music.tempo() + 1)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        music.playMelody("C E G B C5 B F C ", music.tempo())
        music.setTempo(music.tempo() + 1)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        music.playMelody("C E G B C5 B F C ", music.tempo())
        music.setTempo(music.tempo() + 1)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        music.playMelody("C E G B C5 B F C ", music.tempo())
        music.setTempo(music.tempo() + 1)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        music.setTempo(music.tempo() + 1)
    }
}
function GL380 () {
    for (let index = 0; index < 2; index++) {
        music.playTone(349, music.beat(BeatFraction.Double))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, 3)
        music.playTone(440, music.beat(BeatFraction.Double))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(523, 3)
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, 3)
}
let Countdown = 0
let Auswahl = 0
let Aktiv = 0
let Impressum = ""
Impressum = "Dieses Programm wurde durch Johannes Heitz(11_INF_LK_1) 2022 fuer den Tag der Offenen Tuer 2023 erstellt"
