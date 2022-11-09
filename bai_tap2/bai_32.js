function maxNegative() {
    const input = prompt("Nhap day so nguyen, ngan cach bang dau cach", 0)
    let numberNegative = undefined
    for (let i = 0; i < numbers.length; i++) {
      if (
        numbers[i] < 0
        && (max > numbers[i] || max === undefined)
      ) {
        max = numbers[i]
      }
    }

    if (max == undefined) {
      console.log('NOT FOUND')
      return
    }

    console.log(max)
  }
  maxNegative()

