function reverseInt(n) {
    
    // alt:
    // if ( n < 0 ) {
    //     const newN = ((-1) * n).toString().split('').reverse().join('')
    //     return newN * (-1)
    // } else {
    //     const newN = n.toString().split('').reverse().join('')
    //     return newN * (1)
    // }

    const reversed = n.toString().split('').reverse().join('')
    
    return parseInt(reversed) * Math.sign(n)
}

reverseInt(-20)