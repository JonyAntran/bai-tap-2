function findMaxmin() {
    const n = String(prompt("Nhap day so , ngan cach nhau bang dau cach, ket thuc bang so ", 1))
    let max = Number(n.charAt(0))
    let min = Number(n.charAt(0))
    let count = 0
    for (let i = 0; i < n.length; i++) {
      if (i % 2 != 0) {
        continue
      }
     count++
      if (max < Number(n.charAt(i))) {
        max = Number(n.charAt(i))
      }
      if (min > Number(n.charAt(i))) {
        min = Number(n.charAt(i))
      }
    }
    console.log({
      max,
      min,
      count,
    })
  }
  findMaxmin()

