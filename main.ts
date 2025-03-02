let Tal = 0
input.onGesture(Gesture.Shake, function () {
    Tal += 1
    basic.showNumber(Tal)
})
basic.forever(function () {
    if (Tal < 10) {
        basic.showString("Seje dig!")
    }
})
