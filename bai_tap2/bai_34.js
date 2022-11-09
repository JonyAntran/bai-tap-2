function printNumber() {
    const input = prompt("Nhap day so nguyen, ngan cach bang dau cach", 0)
    const numbers = input.split(' ')
    for (let j = 0; j < numbers.length - 1; j++) {
      let sw = false
      for (let i = 0; i < numbers.length - j - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
          const temp = numbers[i]
          numbers[i] = numbers[i + 1]
          numbers[i + 1] = temp
          sw = true
        }
      }
      if (!sw) {
        break
      }
    }


    console.log({ numbers })
  }
 printNumber()
