function total() {
    const n = String(prompt("Nhap so n", 1))
    let sum = 0


    for (i = 0; i < n.length; i++) {
      sum += Number(n.charAt(i))
    }


    console.log({ sum })
  }
  total()
