function findMax() {
    const input = prompt("Nhay day so nguyen, ngan cach bang dau cach", 0)
    const numbers = input.split(' ')


    let max = numbers[0]
    let min = numbers[0]


    for (let i = 0; i < numbers.length; i++) {
      if (max < numbers[i]) {
        max = numbers[i]
      }
      if (min > numbers[i]) {
        min = numbers[i]
      }
    }


    console.log({ max, min })
  }
  findMax()
