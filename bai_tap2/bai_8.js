function printMax() {
    const a = Number(prompt("Nhap a", 0))
    const b = Number(prompt("Nhap b", 0))
    const c = Number(prompt("Nhap c", 0))


    let max = a
    if (max < b) {
      max = b
    }


    if (max < c) {
      max = c
    }


    console.log({ max })
  }
  printMax()
