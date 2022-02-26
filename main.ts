input.onButtonPressed(Button.A, function () {
    if (program_allapot == 0) {
        basic.showString("max: " + max_hangero)
    } else {
        basic.showString("szamlal: " + szamlalo)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("! TORLES !")
    if (program_allapot == 0) {
        max_hangero = 0
    } else {
        szamlalo = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (program_allapot == 0) {
        basic.showString("- meres -")
    } else {
        basic.showString("- szamlalas -")
    }
    program_allapot += 1
    program_allapot = program_allapot % 2
})
let aktualis_hangero = 0
let max_hangero = 0
let szamlalo = 0
let program_allapot = 0
basic.clearScreen()
// Ha értéke 0, akkor detektáljuk a hangerőt.
// Ha 1, akkor számoljuk a hangokat.
program_allapot = 0
szamlalo = 0
max_hangero = 0
basic.showString("- meres -")
basic.forever(function () {
    if (program_allapot == 0) {
        aktualis_hangero = input.soundLevel()
        if (aktualis_hangero > max_hangero) {
            max_hangero = aktualis_hangero
            basic.showIcon(IconNames.Yes)
            basic.pause(100)
            basic.clearScreen()
        }
    } else {
        aktualis_hangero = input.soundLevel()
        if (aktualis_hangero > max_hangero) {
            szamlalo += 1
            basic.showIcon(IconNames.Heart)
            basic.pause(100)
            basic.clearScreen()
        }
    }
})
