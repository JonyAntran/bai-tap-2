function printAverage() {
    const input = prompt("Nhay day so nguyen, ngan cach bang dau cach", 0)
    
    const numbers = input.split(' ')
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
      sum += Number(numbers[i])
    }


    const output = sum / numbers.length
    console.log(output)
  }
  printAverage()

