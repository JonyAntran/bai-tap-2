function splitString() {
    let input = prompt("Nhap vao chuoi ", 'tran quoc an')
    let personName = ''


    for (let i = input.length - 1; i >= 0; i--) {
      if (input[i] == ' ') {
        break
      }
      personName = input[i] + personName
    }
    console.log(personName)
  }
  splitString()
