function findMax() {
    const input = prompt("Nhap day so nguyen, ngan cach bang dau cach", 0)
    const numbers = input.split(' ').map(Number)
    let max1 = numbers[0], max2, max3

    for (let i = 0; i < numbers.length; i++) {
      if (max1 < numbers[i]) {
        max1 = numbers[i]
      }
    }

    for (let i = 0; i < numbers.length; i++) {
      if (
        (max2 === undefined || max2 < numbers[i])
        && max1 > numbers[i]
      ) {
        max2 = numbers[i]
      }
    }

    for (let i = 0; i < numbers.length; i++) {
      if (
        (max3 === undefined || max3 < numbers[i])
        && max2 > numbers[i]
      ) {
        max3 = numbers[i]
      }
    }

    console.log({
      max1,
      max2,
      max3,
    })
  }
  findMax()
