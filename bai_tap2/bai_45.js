function countWord() {
    let string = String(prompt("Nhap vao chuoi", 'danh an di danh'))
    let char = (prompt("Ky tu can dem", 'a'))
    let numberSee = 0
    let lowerChar = char.toLocaleLowerCase()
    let lowerString = string.toLocaleLowerCase()


    for (let i = lowerString.length - 1; i >= 0; i--) {
      let char = lowerString[i]
      if (currentChar == lowerChar) {
        numberSee++
      }
    }


    console.log( "so lan ki tu xuat hien" ,numberSee )
  }
  countWord()
