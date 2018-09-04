import { SimpleArgumentsType } from './protobuffs'

const worker = new Worker('./Worker.ts')
const protoWorker = new Worker('./ProtoWorker.ts')

setTimeout(() => {
  const a = Date.now()

  const message = { 
    foo: 'mystring', 
    bar: 310.5467,
    baz: 9,
    zoo: true,
  }

  worker.onmessage = ({ data }) => {
    console.log('Pong! =>', data)
    console.log('Took regular worker:', Date.now() - a)
  }  

  worker.postMessage(message)
}, 2000)


setTimeout(() => { 
  const a = Date.now()
  const message = SimpleArgumentsType.create({ 
    foo: 'mystring', 
    bar: Math.random(),
    baz: 9,
    zoo: true,
  })
  const { buffer } = SimpleArgumentsType.encode(message).finish()

  protoWorker.onmessage = ({ data }) => {
    console.log('Pong! =>', SimpleArgumentsType.decode(new Uint8Array(data.buffer), data.buffer.byteLength / 2))
    console.log('Took protworker: ', Date.now() - a)
  }  
  
  protoWorker.postMessage({ buffer }, [ buffer ])
}, 3000)

