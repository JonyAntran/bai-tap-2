function calculate() {
    const Radius = Number(prompt("Nhap ban kinh hnh cau", 0))
    const Pi = 3.14
    const Area = 4 * Pi *  Radius *  Radius
    const Volume = (4/3) * Pi * Radius*  Radius *  Radius


    console.log({
     Area,
     Volume,
    })
  }
  calculate()

