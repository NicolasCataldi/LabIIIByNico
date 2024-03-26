let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
];

const newInput = input.map((person) => person.name)


const namesAndCitiesInput = input.map((person) => ({ name: person.name, city: person.city }))

/* 2. Crear un arreglo de nombres a partir del arreglo anterior pero solo para las
personas mayores de 20 años y menores de 29.*/
const sortedInput = input.filter((person) => person.age > 20 && person.age < 29).sort((a, b) => a.age - b.age)

console.log(sortedInput);

/* 3. Dado un arreglo de objetos de países que poseen dos propiedades: name y
population, ordenarlos de mayor a menor en cuanto a su población utilizando la
función de arreglo sort().
Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000}
*/

const countries = [{ name: "Argentina", population: 45810000 }, { name: "Chile", population: 2 }, { name: "Republica del congo", population: -500 }]

const sortedCountries = countries.sort((a, b) => b.population - a.population)

/* 4. Estás a cargo de las velas de cumpleaños para el cumpleañero y decidiste que la
torta va a tener una vela por cada año de su edad total. Solo van a poder soplar las
velas más altas de la torta.
Tu objetivo es contar cuántas son las más altas de la torta
Ejemplo candles = [4, 4, 1, 3]
Las velas de mayor altura son de 4 de altura y son 2 en total. Por ende, la función
debe retornar 2 como valor. */

const candles = [4, 4, 1, 3]
console.log(candles.filter(candle => candle === Math.max(...candles)).length)

/* 5. El profesor de Lab Computación III tiene una clase de estudiantes. Frustrado con la falta de disciplina, el profesor decide cancelar la clase si menos que cierta cantidad
de estudiantes están presentes cuando la clase empieza.
Dado un arreglo de enteros que representa la llegada de estudiantes (<=0 significa
que se llegó temprano o a tiempo!), y la cantidad mínima de estudiantes para que el
profesor de la clase, determinar si la clase se cancela o no.
Devolver la cadena "YES" si la clase SE CANCELA o "NO" si la clase NO SE
CANCELA.*/

const minimumAttendance = 4

const studentsAttendance = [
    0,0,0,1,1,1
]

function calcAttendance(minimumAttendance, studentsAttendance) {

   const presentStudents = studentsAttendance.filter(
    (isStudentPresent) => isStudentPresent <= 0)

    console.log(`Hay ${presentStudents.length} estudiantes de los ${minimumAttendance} necesarios`)

    if (presentStudents.length < minimumAttendance){
        return "YES"
    }else{
        return "NO"
    }
}

console.log(calcAttendance(minimumAttendance, studentsAttendance))

/* 7. Escribir una función que convierta un objeto de JS en un arreglo de JS:
Ejemplos:
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",
12]] */

/* const objectExample = { a: 1, b: 2 }
console.log(Object.keys(objectExample))

function convertToArray(object){
    const arrayExample = Object.keys(object)
    
    console.log(arrayExample)
}

convertToArray(objectExample)
 */


