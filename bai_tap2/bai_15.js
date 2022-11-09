function drawing() {
    const Longs = Number(prompt("Nhap chieu dai", 1))
    const Widths = Number(prompt("Nhap chieu rong", 1))
    let longEdge = ''


    for (let j = 1; j <= Widths; j++) {
      longEdge += '*'
    }


    for (let i = 1; i <= Longs; i++) {
      console.log(longEdge )
    }
  }
  drawing()
