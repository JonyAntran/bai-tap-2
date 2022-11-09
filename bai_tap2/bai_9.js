function test() {
    const a = Number(prompt("Nhap a", 0))
    const b = Number(prompt("Nhap b", 0))
    const c = Number(prompt("Nhap c", 0))


    if (isCheck(a, b, c)) {
      const p = (a + b + c) / 2
      
      const s = Math.sqrt(p * (p - a) * (p - b) *(p - c))
      console.log({ s })
    } else {
      console.log('No')
    }
  }
  function isCheck(a, b, c) {
    if (a + b > c
      || a + c > b
      || b + c > a
    ) {
    
      return true
    }


    return false
  }


  test()
