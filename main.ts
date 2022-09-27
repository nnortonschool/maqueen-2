basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        if (Math.randomBoolean()) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
            basic.pause(250)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            basic.pause(250)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
