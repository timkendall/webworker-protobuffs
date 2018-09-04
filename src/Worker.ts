self.onmessage = (message) => {
  const { data } = message

  console.log('Ping (worker) => ', data)

  const response = {
    foo: 'mystring', 
    bar: 310.5467,
    baz: 9,
    zoo: true,
  }

  self.postMessage(response)
}