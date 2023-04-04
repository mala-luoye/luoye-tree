const outerFoo = (num1 = 2) => {
  const innerFoo = (num2) => {
    if (num2 >= num1) return
    num2++
    console.log(num2)
    innerFoo(num2)
    console.log(num2)
  }
  innerFoo(0)
}

outerFoo()
