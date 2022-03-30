input.calibrateCompass()
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeNumNewLine(input.compassHeading())
    if (input.compassHeading() > 0 && input.compassHeading() < 46) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (input.compassHeading() > 45 && input.compassHeading() < 91) {
        basic.showLeds(`
            . . . . .
            # . . . .
            . # # . .
            . . . . .
            . . . . .
            `)
    } else if (input.compassHeading() > 90 && input.compassHeading() < 135) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # # . . .
            . . . . .
            `)
    } else if (input.compassHeading() > 136 && input.compassHeading() < 181) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . # . . .
            `)
    } else if (input.compassHeading() > 180 && input.compassHeading() < 226) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . # .
            . . . # .
            `)
    } else if (input.compassHeading() > 225 && input.compassHeading() < 276) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . . . . #
            . . . . .
            `)
    } else if (input.compassHeading() > 275 && input.compassHeading() < 360) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
    }
})
