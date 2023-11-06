const prompt = require("prompt-sync")()
let lengthForArr = parseInt(prompt("Введіть довжину масиву: "))
let startNumber = parseInt(prompt("Введіть число з якого починаєься: "))

const arr = []

if (isNaN(lengthForArr) || isNaN(startNumber)) {
    for (let i = startNumber; i < startNumber + lengthForArr; i++){
        if (isPrime(i)) {
            arr.push(i)
        }
        i++
    }
    return
}

console.log('Результат:', arr)

function isPrime(numP) {
  if (numP <= 1) return false
  if (numP <= 3) return true

  if (numP % 2 === 0 || numP % 3 === 0) return false

  for (let n = 5; n * n <= numP; n += 6) {
    if (numP % n === 0 || numP % (n + 2) === 0) return false
  }
  return true
}
