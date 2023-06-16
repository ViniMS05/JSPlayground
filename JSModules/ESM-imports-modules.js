import { sum, division, multiply } from "./ESM-exports-modules.js";

const getOperations = (n1,n2) => {
    const x = sum(n1,n2)
    const y = multiply(n1,n2)
    const z = division(n1,n2)

    return {
        soma: x,
        multiplicação: y,
        divisão: z
    }
}

const count = getOperations(10, 20)

const arr = [['sum', count.soma], ['multiply', count.multiplicação], ['division', count.divisão]]

const reducedArr = arr.reduce((acc, current) => {
    acc[current[0]] = current[1]

    return acc
}, {})

console.log(count)
console.log('==============================================');
console.log(arr)
console.log('==============================================');
console.log(reducedArr)