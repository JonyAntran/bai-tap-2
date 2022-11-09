function findMax() {
    const n = String(prompt("Nhap so n", 1))
    let max = n.charAt(0)
    for (i = 1; i < n.length; i++) {
      if (max < n.charAt(i)) {
        max = n.charAt(i)
      }
    }
    console.log({ max })
  }
  findMax()
