function changeFont() {
    let input = prompt("Nhập vào chuỗi", 'hom NaY tRoi dep QUA!')
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const mapLowerCaseToUpperCase = {}
    const mapUpperCaseToLowerCase = {}
    for (let i  = 0; i < lowerCaseChars.length; i++) {
      const lowerChar = lowerCaseChars[i]
      const upperChar = upperCaseChars[i]
      mapLowerCaseToUpperCase[lowerChar] = upperChar
      mapUpperCaseToLowerCase[upperChar] = lowerChar
    }
    let sentence = String(' ' + input).split('')
    for (let i = 1; i < sentence.length; i++) {
      const char = sentence[i]
      if (sentence[i - 1] == ' ' && sentence[i] != ' ') {
        sentence[i] = mapLowerCaseToUpperCase[char] || sentence[i]
      } else {
        sentence[i] = mapUpperCaseToLowerCase[char] || sentence[i]
      }
    }

    sentence = sentence.join('')
    console.log(sentence)
  }
  changeFont()
