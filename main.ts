/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan M
 * Created on: Sep 2024
 * This program does basic math
*/

basic.clearScreen()
basic.pause(1000)

//Script
basic.showString('A rectangle has dimensions 5 cm & 3 cm.')
basic.pause(1000)
basic.showString('The perimeter would be: 16 cm.')
basic.pause(1000)
basic.showString('The area would be: 15 cm^2')

//Area
basic.showString('A = 5 cm x 3 cm =' + (5 * 3).toString())
basic.showString('A = 15 cm^2')
basic.pause(1000)
basic.showIcon(IconNames.Happy)
basic.clearScreen()
basic.pause(1000)

//Perimeter
basic.showString('P = 5(2) + 3(2) =' + (5 * 3).toString())
basic.pause(1000)

//Addition
basic.showString('312 + 42 =' + (312 + 42 ).toString())
basic.showIcon(IconNames.Happy)
basic.clearScreen()
basic.pause(1000)

//Multiplication
basic.showString('100 x 30 =' + (100 * 30).toString())
basic.showIcon(IconNames.Heart)
basic.clearScreen()
basic.pause(1000)

//Subtration
basic.showString('100 - 50 =' + (100 - 50).toString())
basic.showIcon(IconNames.Fabulous)
basic.clearScreen()
basic.pause(1000)

//Division
basic.showString('50 / 5 =' + (50 / 5).toString())
basic.showIcon(IconNames.SmallHeart)
basic.clearScreen()
basic.pause(1000)

//Exponents
basic.showString('10 + 5^5 =' + (50 + 5**5).toString())
basic.showIcon(IconNames.Surprised)
basic.clearScreen()
basic.pause(1000)
