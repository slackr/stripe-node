const {argv} = require('process');

function readObject(reader, callback) {
  while (reader.position < reader.data.length) {
    const v = readVarint(reader);
    const tag = v >> 3;
    const type = v & 0b111;
    let value = null;

    switch (type) {
      case 0:
        value = readVarint(reader);
        break;
      case 2:
        const length = readVarint(reader);
        value = reader.data.slice(reader.position, length);
        reader.position += length;
        break;
      default:
        throw new Error('Unsupported type ' + type);
    }

    callback(tag, value);
  }
}

function readVarint(reader) {
  const buf = reader.data;

  let b = buf[reader.position++];
  let val = b & 0x7f;
  if (!(b & 0x80)) {
    return val;
  }

  b = buf[reader.position++];
  val |= (b & 0x7f) << 7;
  if (!(b & 0x80)) {
    return val;
  }

  b = buf[reader.position++];
  val |= (b & 0x7f) << 14;
  if (!(b & 0x80)) {
    return val;
  }

  b = buf[reader.position++];
  val |= (b & 0x7f) << 21;
  if (!(b & 0x80)) {
    return val;
  }

  b = buf[reader.position++];
  val |= (b & 0x0f) << 28;
  if (!(b & 0x80)) {
    return val;
  }

  throw new Error('Unexpected varint size');
}

const buffer = Buffer.from(argv[2], 'base64');
const reader = {data: buffer, position: 0};

console.log(reader);
readObject(reader, (tag, value) => console.log([tag, value]));
