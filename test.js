function test () {
  for (let i = 0; i < 10; i++) {
    if (i === 5) return
    console.log(i)
  }
}

test()
