let B = 0
let A = 0
function B_근전도측정 () {
    B = 0
    for (let index = 0; index < 5; index++) {
        basic.pause(1000)
        B += pins.analogReadPin(AnalogPin.P0)
    }
}
function 근전도측정_평균값_출력 () {
    A = A / 5
    B = B / 5
    basic.showString("A: ")
    basic.showNumber(Math.trunc(A))
    basic.showString("B: ")
    basic.showNumber(Math.trunc(B))
}
input.onButtonPressed(Button.A, function () {
    A_근전도측정()
})
function 근전도비교후큰값출력 () {
    if (A > B) {
        basic.showString("A WIN!")
    } else if (A < B) {
        basic.showString("B WIN!")
    } else {
        basic.showString("DRAW")
    }
}
input.onButtonPressed(Button.AB, function () {
    근전도측정_평균값_출력()
    근전도비교후큰값출력()
})
input.onButtonPressed(Button.B, function () {
    B_근전도측정()
})
function A_근전도측정 () {
    A = 0
    for (let index = 0; index < 5; index++) {
        basic.pause(1000)
        A += pins.analogReadPin(AnalogPin.P0)
    }
}
