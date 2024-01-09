export default function createInt8TypedArray(length, position, value) {
  const arrayBuff = new ArrayBuffer(length);
  const int8Array = new Int8Array(arrayBuff);
  if (position > int8Array.length) {
    throw new Error('Position outside range');
  }
  int8Array[position] = value;
  return new DataView(arrayBuff);
}
