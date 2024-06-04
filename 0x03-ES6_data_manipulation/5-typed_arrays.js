export default function createInt8TypedArray(length, position, value) {
  const dataView = new DataView(new ArrayBuffer(length), 0, length);
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  dataView.setInt8(position, value);
  return dataView;
}
