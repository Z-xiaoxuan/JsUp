isNaN(Number(!!Number(parseInt('0.8'))))  // false

console.log(1 + '2' + '2') // '122'

!typeof parseFloat("0") // false

Number("") // 0

typeof "paseInt(null)" + 12 + !!Number(NaN) // "String12False"


!typeof (isNaN("")) + parseInt(NaN) // NaN

typeof !parseInt(null) + !isNaN(null) // "booleantrue"

!(!"Number(undefined)") // true

isNaN(parseInt(new Date())) + Number([1]) + typeof undefined // "2undefined"

Boolean(Number("")) + !isNaN(Number(null)) + Boolean("parseInt([])") + typeof !(null) // "2boolean"

