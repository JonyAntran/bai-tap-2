function printList() {
    const k = Number(prompt("Nhap day so , ngan cach nhau bang dau cach,ket thuc bang so 0", 1))

    let i = 0
    let number = 2
    while (true) {
      if (isElement(number)) {
        console.log(number)
        i++
      }
      if (i >= k) {
        break
      }
      number++
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

