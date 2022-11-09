function checkString() {
    let input = prompt("Nhap vao chuoi", '123456789').split('')
    for (let i = 0; i < input.length; i++) {
      if (input[i] != Number(input[i])) {
        console.log('FALSE')
        return
      }
    }
    console.log('TRUE')
  }
  checkString()

