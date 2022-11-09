function printList() {
    const h = Number(prompt("Nhap day so , ngan cach nhau bang dau cach,ket thuc bang so 0", 1))
    let found = false
    for (let i = h - 1; i > 1; i--) {
      if (isElement (i)) {
        found = true
        console.log(i)
      }
    }
    if (!found) {
      console.log('NOT FOUND')
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
  printList()

