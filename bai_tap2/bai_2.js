function calculate() {
    const a = Number(prompt("Nhap so a", 0))
    const a2 = indexNumber(a, 2)
    const a3 = indexNumber(a, 3)
    const a4 =indexNumber(a, 4)
    console.log({
      a2,
      a3,
      a4,
    })
  }
  function indexNumber (a, n) {
    let result = a
    for (let i = 2; i <= n; i++) {
      result = result * a
    }
    return result
  }
  calculate()


