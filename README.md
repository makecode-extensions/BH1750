# BH1750

makecode BH1750 Digital Ambient Light Sensor package for micro:bit  

Author: shaoziyang  
Date:   2018.Mar  

![](https://raw.githubusercontent.com/microbit-makecode-packages/BH1750/master/icon.png)  
  
![](https://raw.githubusercontent.com/microbit-makecode-packages/BH1750/master/GY-30.jpg)

## usage

open your microbit makecode project, in Add Package, paste  

https://github.com/microbit-makecode-packages/BH1750  

to search box then search.

## I2C Address  
- 35/92 

## API

- SetAddress(to: BH1750_ADDRESS)  
to is BH1750 address, it maybe 35 or 92  

- on()  
turn on BH1750.

- off()
turn off BH1750, to reduce power consumption.

- getIntensity()  
get ambient light data

## Demo

![](https://raw.githubusercontent.com/microbit-makecode-packages/BH1750/master/demo.jpg)

## License

MIT

Copyright (c) 2018, microbit/micropython Chinese community  

## Supported targets

* for PXT/microbit


[From microbit/micropython Chinese community](http://www.micropython.org.cn)
