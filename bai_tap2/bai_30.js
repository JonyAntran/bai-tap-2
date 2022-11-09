function printAverage() {
    const input = prompt("Nhay day so nguyen, ngan cach bang dau cach", 0)
    const numbers = input.split(' ')
    let sum = 0
    let count = 0
    for (let i = 0; i < numbers.length; i++) {
      if (isElement(numbers[i])) {
        sum += Number(numbers[i])
        count++
      }
    }


    if (count === 0) {
      console.log('NOT FOUND')
      return
    }


    const output = sum / count
    console.log(output)
  }


  function isElement(n) {
    if (n <= 1) {
      return false
    }
    let isElement = true


    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false
      }
    }


    return isElement
  }
  printAverage()

