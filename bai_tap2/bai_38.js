function checkElement() {
    const input = prompt("Nhap day so nguyen, ngan cach bang dau cach", 0)
    const numbers = input.split(' ').map(Number)
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= numbers[i + 1]) {
        console.log('FALSE')
        return
      }
    }


    console.log('TRUE')
  }
  checkElement()
