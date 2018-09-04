import { SimpleArgumentsType } from './protobuffs'

type Message = {
  data: {
    buffer: ArrayBuffer
  }
}

self.onmessage = (message: Message) => {
  const { data } = message

  // Note: Protobuff.js expects a UInt8Array
  const uInt8Array = new Uint8Array(data.buffer)
  // Note: For some reason we need to tell Protobuff.js the 
  // length of our buffer or it will throw a RangeError
  const length = data.buffer.byteLength / 2

  const decoded = SimpleArgumentsType.decode(
    uInt8Array,
    length
  )

  console.log('Ping (worker) => ', decoded)

  const response = SimpleArgumentsType.create({ 
    foo: 'another', 
    bar: 450.12,
    baz: 2,
    zoo: false,
  })
  const { buffer } = SimpleArgumentsType.encode(response).finish()

  
  self.postMessage({ buffer }, [ buffer ])
}