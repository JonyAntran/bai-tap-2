function printFactorial() {
    const n = Number(prompt("So n", 1))
    let Sum = 1
    for (let i = n; i >= 1; i--) {
      Sum = Sum * i
    }
    console.log({ Sum })
  }
  printFactorial()
