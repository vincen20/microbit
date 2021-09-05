input.onButtonPressed(Button.A, function () {
    sumc = sumc + 1
    if (sumc > 10) {
        sumc = 0
    }
    basic.showString("" + (sumc))
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
    sumc = 0
})
input.onButtonPressed(Button.B, function () {
    sumc = sumc - 1
    if (sumc <= 0) {
        sumc = 0
    }
    basic.showString("" + (sumc))
})
let sumc = 0
basic.showIcon(IconNames.Heart)
