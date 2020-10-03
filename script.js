
// ejercicio que permite multiplicar un numero sin usar el operador *
// primera forma
const multiply = (a, b) => b / (1 / a);

// segunda forma
const multiply1 = (a, b) =>{
  let result = 0
  const pos = Math.abs(b) == b
  for (i = 0; i < Math.abs(b) ; i++){
    result = pos ? result + a: result - a
  }
  return result
}


// obtener el mas valor mas grande de un arreglo pero iterando a este solo una vez

const getBiggestElement = (array) => array.reduce((acc, element) =>acc > element? acc : element)

// iterando una vez  eliminar todos los undefined, 0, null, false
const clean = (array) => array.reduce((acc, element) => {
  if (element){
    acc.push(element)
  }
  return acc
}, [])

// aplanar los arreglos en un nivel
const flatten = (array) => array.reduce((accumulator, element) => accumulator.concat(element), [])

//  saber la cantidad de veces que se repite una palabra
const repeated = string => {
  const lowered = string.toLowerCase()
  const splitted = lowered.split(' ')
  const reduced = splitted.reduce((accumulator, elemento)=>{
    if(accumulator[elemento]){
      accumulator[elemento] ++
    }else{
      accumulator[elemento] = 1
    }
    return accumulator
  }, {})
  return Object.entries(reduced).reduce((acc, el) =>acc[1] > el[1]? acc : el)
}

const isPalindrome = (str) =>{
  str = str.replace(/\s/g, ' ')
  const lowered = str.toLowerCase()
  const splitted = lowered.split(' ')
  const reversed = splitted.reverse()
  const joined = reversed.join(' ')
  return lowered == joined
}

// 1 ejercicio
// console.log(multiply1(12, 5))

// segundo ejercicio
//const numbers = [-100, 10, 20, 30, -500, 500]
// console.log(getBiggestElement(numbers))

// tercer ejercicio
// const arrayToClean = [0, false, undefined, 30, -500, "hola"]
// console.log(clean(arrayToClean))

// cuarto ejercicio
 // const array = [[[0]], [1], [[[1]]]]
// console.log(flatten(array))

// 5 ejercicio
//console.log(repeated(('Hola , hola este es un test , hola')))

// 6 ejercicio
// console.log(isPalindrome('hola como hola1'))