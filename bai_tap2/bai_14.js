function calculate() {
    const n = Number(prompt("Số n", 1))
    let Sum = 0
    for (let i = 1; i <= n; i++) {
      Sum = Sum + 1/i
    }
    console.log({ Sum })
  }
  calculate()
