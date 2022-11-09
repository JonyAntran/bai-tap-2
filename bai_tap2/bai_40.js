function countWord() {
  let input = prompt("Nhập vào chuỗi", 0)
  input = ' ' + input


  let word = 0
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] == ' ' && input[i + 1] != ' ') {
      word++
    }
  }


  console.log({ word })
}
countWord()
