class TV {
    constructor(brand, channel = 1, volume = 50) {
        this.brand = brand
        this.channel = channel
        this.volume = volume
    }

    changeVolume(volumeLevel) {
        if (this.volume + volumeLevel > 50) {
            return this.volume === 50;
        }
        else if (this.volume + volumeLevel < 0) {
            return this.volume
        }
        else {
           return this.volume += volumeLevel
        }
    }
    changeChannel(channelNumber) {
        50 >= channelNumber > 0 ? this.channel = channelNumber : this.channel;
    }
    reset() {
        this.channel = 1;
        this.volume = 50;
    }
    status() {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    }
}

let panasonic = new TV("Panasonic")
panasonic.changeVolume(-7)
panasonic.changeChannel(48)
console.log(panasonic)
panasonic.reset()
console.log(panasonic.status())
