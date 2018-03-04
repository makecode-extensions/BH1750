let Intensity = 0
BH1750.SetAddress(BH1750_ADDRESS.A35)
led.plotBarGraph(
100,
100
)
basic.forever(() => {
    Intensity = BH1750.getIntensity()
    led.setBrightness(20 + Intensity / 512)
    basic.pause(500)
})
