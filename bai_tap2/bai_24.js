function printAverage() {
    const k = Number(prompt("Nhap day so , ngan cach nhau bang dau cach,ket thuc bang so 0", 1))


    let numbers = ''
    for (let i = k; i > 1; i--) {
      if (isElement(i)) {
        numbers += String(i)
      }
    }


    let sum = 0
    let count = 0
    for (let i = 0; i < numbers.length; i++) {
      sum += Number(numbers.charAt(i))
      count++
    }


    
    const average = Math.round(sum/count * 100) / 100


    console.log({ average })
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
