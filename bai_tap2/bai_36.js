function countNumber() {
    const input = prompt("Nhap day so nguyen, ngan cach bang dau cach", 0)

    const numbers = input.split(' ').map(Number)
    const numbersToTimes = {}
    for (let i = 0; i < numbers.length; i++) {
      if (numbersToTimes[numbers[i]] === undefined) {
        numbersToTimes[numbers[i]] = 0
      }

      numbersToTimes[numbers[i]] = numbersToTimes[numbers[i]] + 1
    }

    let uniqueNumbersCount = 0

    for (let number in numbersToTimes) {
      uniqueNumbersCount++
    }
    console.log('Số phần tử khác nhau:', uniqueNumbersCount)

    for (let number in numbersToTimes) {
      console.log('Số', number, 'xuất hiện', numbersToTimes[number], 'lần')
    }
  }
  countNumber()

