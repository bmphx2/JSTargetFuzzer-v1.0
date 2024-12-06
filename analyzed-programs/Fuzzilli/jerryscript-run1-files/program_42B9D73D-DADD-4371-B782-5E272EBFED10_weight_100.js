new Uint8ClampedArray(6);
new Int32Array(10);
let v8 = new Int16Array(128);
const o12 = {
};
const v14 = new Proxy(v8, o12);
v8 ||= v14;
v8.e = Int32Array;
