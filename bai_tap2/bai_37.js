function countNumber() {
  const input = prompt("Nhập dãy số nguyên, ngăn cách bằng dấu cách", 0)
  const numbers = input.split(' ').map(Number)
  const numbersToTimes = {}
  for (let i = 0; i < numbers.length; i++) {
    if (numbersToTimes[numbers[i]] === undefined) {
      numbersToTimes[numbers[i]] = 0
    }


    numbersToTimes[numbers[i]] = numbersToTimes[numbers[i]] + 1
  }


  let numberMaxTimes = undefined
  let maxTimes = undefined


  for (let number in numbersToTimes) {
    const times = numbersToTimes[number]
    if (maxTimes == undefined || maxTimes < numbersToTimes[number]) {
      maxTimes = numbersToTimes[number]
      numberMaxTimes = number
    }
  }
  console.log("so:",numberMaxTimes, "xuat hien nhieu nhat:", maxTimes ,"lan")
}
countNumber()
