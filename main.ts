input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(200)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 1; index++) {
        basic.showNumber(1)
        basic.showNumber(2)
        basic.showNumber(3)
        basic.showString("ACT RoCkZ!!")
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            `)
        basic.pause(200)
        basic.showIcon(IconNames.Duck)
        basic.pause(200)
    }
    basic.clearScreen()
})
