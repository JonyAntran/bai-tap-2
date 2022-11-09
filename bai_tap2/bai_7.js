function printMax() {
    const a = Number(prompt("Nhap a", 0))
    const b = Number(prompt("Nhap b", 0))
    let max = a
    if (max < b) {
      max = b
    }

    console.log({ max })
  }
  printMax()

