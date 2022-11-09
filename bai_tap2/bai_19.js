function printNumber() {
    const n = String(prompt("Nhap so n", 1))
    let reverseNumber = ''
    for (i = n.length; i >= 0; i--) {
      
        reverseNumber += n.charAt(i)
    }
    console.log({ reverseNumber })
  }
 printNumber()
