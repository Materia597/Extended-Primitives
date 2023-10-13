Number.prototype.floor = () => {
    return Math.floor(this)
}

Number.prototype.ceil = () => {
    return Math.ceil(this)
}

Number.prototype.round = () => {
    return Math.round(this)
}

Number.prototype.sqrt = () => {
    return Math.sqrt(this)
}

Number.prototype.power = (power) => {
    return this ** power
}

Number.prototype.squared = () => {
    return this * this
}

Number.prototype.cubed = () => {
    return this * this * this
}

Number.prototype.mod = (mod) => {
    return this % mod
}

Number.prototype.largestPowerOf2 = () => {
    let power = -32
    while(this - 2 ** power > 2 ** power) power++
    
}