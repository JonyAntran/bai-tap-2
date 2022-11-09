function squareNumber() {
    const input = prompt("Nhap day so nguyen ngan cach bang dau cach", 0)
    const numbers = input.split(' ')
    let sum = 0
    let count = 0
    for (let i = 0; i < numbers.length; i++) {
      if (isNumber(numbers[i])) {
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
  function isNumber(n) {
    if (n < 0) {
      return false
    }
    const squareTwo = Math.floor(Math.sqrt(n))
    return squareTwo * squareTwo == n
  }
  squareNumber()

