new Float64Array(256);
const v8 = new Uint8ClampedArray(5);
new BigUint64Array(512);
v8[Symbol.toStringTag] = 256;
v8[65535] >>= 4294967296;
