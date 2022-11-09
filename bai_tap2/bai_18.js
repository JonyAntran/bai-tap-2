function testNumber() {
    const n = Number(prompt("Nhap so can kiem tra", 1))
    if (isElement(n)) {
      console.log('TRUE')
    } else {
      console.log('FALSE')
    }
  }
  function isElement(n) {
    if (n <= 1) {
      return false
    }
    let isElement = true


    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false
      }
    }


    return isElement
  }
  testNumber()
