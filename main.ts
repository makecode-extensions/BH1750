/**
 * makecode BH1750 Digital Ambient Light Sensor Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

// BH1750's I2C address
enum BH1750_ADDRESS {
    //% block="35"
    A35,
    //% block="92"
    A92
}

let Address = 35

/**
 * BH1750 Digital Ambient Light Sensor Package
 */
//% weight=100 color=#000011 icon="\uf185"
namespace BH1750 {
    /**
     * set BH1750 Digital Ambient Light Sensor I2C address, default is 35
     * @param is I2C address, eg: 35
     */
    //% blockId="BH1750_SET_ADDRESS" block="set Address %addr"
    //% weight=100 blockGap=8
    export function SetAddress(addr: BH1750_ADDRESS): void {
        if (addr == BH1750_ADDRESS.A35)
            Address = 35
        else
            Address = 92
    }

    /**
     * turn on BH1750.
     */
    //% blockId="BH1750_ON" block="turn on"
    //% weight=90 blockGap=8
    export function on(): void {
        pins.i2cWriteNumber(Address, 0x10, NumberFormat.UInt8BE)
    }

    /**
     * turn off BH1750, to reduce power consumption.
     */
    //% blockId="BH1750_OFF" block="turn off"
    //% weight=90 blockGap=8
    export function off(): void {
        pins.i2cWriteNumber(Address, 0, NumberFormat.UInt8BE)
    }

    /**
     * get ambient light data (lx)
     */
    //% blockId="BH1750_GET_INTENSITY" block="get intensity (lx)"
    //% weight=80 blockGap=8
    export function getIntensity(): number {
        return pins.i2cReadNumber(Address, NumberFormat.UInt16BE) * 5 / 6
    }

    on();
}  