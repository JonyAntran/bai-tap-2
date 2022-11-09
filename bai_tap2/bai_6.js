function printTime() {
    const timeSeconds = Number(prompt("Nhap vao so giay", 1))
    let timeRemani = timeSeconds
    let hours = Math.floor(timeRemani / 60 / 60)
    timeRemani = timeRemani - hours * 60 * 60
    let minutes = Math.floor(timeRemani / 60)
    timeRemani = timeRemani - minutes * 60
    let seconds = timeRemani
    hours = fillIn(hours, 2)
    minutes = fillIn(minutes, 2)
    seconds = fillIn(seconds, 2)
    console.log(`${hours}:${minutes}:${seconds}`)
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

