function printNumber() {
    const input = prompt("Nhay day so nguyen, ngan cach bang dau cach", 0)
    const numbers = input.split(' ')


    for (let i = 0; i < numbers.length; i++) {
      if (isElement(numbers[i])) {
        console.log(numbers[i])
      }
    }
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
  printNumber()
