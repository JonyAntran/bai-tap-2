function drawing() {
    const n = Number(prompt("Nhap n", 1))


    for (let i = n; i >= 1; i--) {
      let s = ''
      for (let j = 1; j <= i; j++) {
        s = s + '*'
      }
      console.log(s)
    }
  }
  drawing()
