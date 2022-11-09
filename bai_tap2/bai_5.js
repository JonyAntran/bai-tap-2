function printTime() {
    let date = Number(prompt("Nhap ngay", 1))
    let month = Number(prompt("Nhap thang", 1))
    let year = Number(prompt("Nhap nam", 1))
    date = fillIn(date, 2)
    month = fillIn(month, 2)
    year = fillIn(year, 4)
    console.log(`${date}/${month}/${year}`)
  }
   function fillIn(number, length) {
    const stringNumber = String(number)
    const numberZero = length - stringNumber.length
    let finalNumber = stringNumber
    for (i = 1; i <= numberZero; i++) {
      finalNumber = '0' + finalNumber
    }
    return finalNumber
  }
  printTime()

