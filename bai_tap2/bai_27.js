function findMax() {
    const input = prompt("Nhay day so nguyen, ngan cach bang dau cach", 0)
   
    const numbers = input.split(' ')


    let maxIndex = 0
    let max = numbers[maxIndex]


    for (let i = 0; i < numbers.length; i++) {
      if (max < numbers[i]) {
        maxIndex = i
        max = numbers[i]
      }
    }


    console.log({ maxIndex })
  }
  findMax()
