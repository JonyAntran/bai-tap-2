function  printString() {
    const n = Number(prompt("Nhap so n", 1))
    for (let i = 1; i <= n; i++) {
      console.log(i)
    }
  }
  main()
function main() {
    const n = Number(prompt("Nhap so n", 1))
    let sum = 0
    for (let i = 1; i <= n; i++) {
      sum = sum + i
    }
    console.log({ sum })
  }
  printString()

