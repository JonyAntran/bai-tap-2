function checkElement() {
    const input = prompt("Nhap day so nguyen, ngan cach bang dau cach", 0)
    const numbers = input.split(' ').map(Number)
    const middle = parseInt(numbers.length/2)
    for (let i = 0; i < middle; i++) {
      if (numbers[i] != numbers[numbers.length - i - 1]) {
        console.log('FALSE')
        return
      }
    }


    console.log('TRUE')
  }
  checkElement()
