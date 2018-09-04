# webworker-protobuffs
Experiments with communicating with Web Workers using just Transferables. 

Data types are declared with [Protocol Buffers](https://developers.google.com/protocol-buffers/) using [dcodeIO/protobuf.js](https://github.com/dcodeIO/protobuf.js) and then converted to [ArrayBuffer's](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) before being transfered to thw Worker thread with [`postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage).

Preliminary results are that using this method vs. the standard passing of object literals _is ~2x slower._

**Note: There is currently a bug where subsequent ProtoBuff messages fail due to Protobuff.js reusing the same `ArrayBuffer` internally (i.e the one we transfer to the Worker). This could likely be solved by cloning the buffer.**

## Running

1. `yarn`
1. `yarn start`
1. Open [http://localhost:1234](http://localhost:1234) and view console

## License

MIT