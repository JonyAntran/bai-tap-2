function deleteString() {
    let input = prompt("Nhap vao chuoi", '////vidu//////code//////nhapvao/////').split('')
    let i = 0
    while (i < input.length) {
      if (
        i == 0 && input[i] == '/'
        || i == input.length - 1 && input[i] == '/'
        || input[i] == '/' && input[i + 1] == '/'
      ) {
       
        for (let j = i; j < input.length; j++) {
          input[j] = input[j + 1]
        }
    
        input.length = input.length - 1
      } else {
        i++
      }
    }
 
    input = input.join('')
    console.log({ input })
  }
  deleteString()

