function  bill() {
    const Minutes = Number(prompt("Nhap so phut", 0))
    let Money = 25000
    let minutesLeft =  Minutes
    if ( minutesLeft >= 50) {
       Money += 50 * 600
       minutesLeft =  minutesLeft - 50
    } else {
        Money +=  minutesLeft * 600
        minutesLeft = 0
    }
    if ( minutesLeft >= 150) {
        Money += 150 * 400
        minutesLeft =  minutesLeft - 150
    } else {
        Money  +=  minutesLeft * 400
        minutesLeft = 0
    }   
    Money +=  minutesLeft * 200
    console.log({
        Money 
    })
  }
  bill()
