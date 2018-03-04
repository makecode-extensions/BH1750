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
    //% block
    export function SetAddress(to: BH1750_ADDRESS): void {
        if (to == BH1750_ADDRESS.A35)
            Address = 35
        else
            Address = 92
    }

    /**
     * turn on BH1750.
     */
    //% block
    export function on(): void {
        pins.i2cWriteNumber(Address, 0x10, NumberFormat.UInt8BE)
    }

    /**
     * turn off BH1750, to reduce power consumption.
     */
    //% block
    export function off(): void {
        pins.i2cWriteNumber(Address, 0, NumberFormat.UInt8BE)
    }

    /**
     * get ambient light data (lx)
     */
    //% block
    export function getIntensity(): number {
        return pins.i2cReadNumber(Address, NumberFormat.UInt16BE) * 5 / 6
    }

    on();
}
