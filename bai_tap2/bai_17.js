function drawing() {
    const Longs = Number(prompt("Nhap chieu dai", 1))
    const Widths = Number(prompt("Nhap chieu rong", 1))
    let longEdge = ''
    let hollowEdge = ''
    for (let j = 1; j <= Widths; j++) {
        longEdge += '*'
      if (j == 1 || j == Widths) {
        hollowEdge += '*'
      } else {
        hollowEdge += ' '
      }
    }
    for (let i = 1; i <=  Longs ; i++) {
      if (i == 1 || i ==  Longs ) {
        console.log(longEdge)
      } else {
        console.log(longEdge)
      }
    }
  }
  drawing()
