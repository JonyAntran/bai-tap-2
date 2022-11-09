function printNumber() {
    const input = prompt("Nhap day so nguyen, ngan cach bang dau cach", 0)
    const numbers = input.split(' ')
    const negativeNumber = [] 


    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        negativeNumber.push(numbers[i])
      }
      if (numbers[i] > 0) {
        positiveNumber.push(numbers[i])
      }
    }


    if ( negativeNumber.length > 0) {
      console.log({  negativeNumber })
    } else {
      console.log('So am: NOT FOUND')
    }


    if (positiveNumber.length > 0) {
      console.log({ positiveNumber })
    } else {
      console.log('So duong: NOT FOUND')
    }
  }
  printNumber()
