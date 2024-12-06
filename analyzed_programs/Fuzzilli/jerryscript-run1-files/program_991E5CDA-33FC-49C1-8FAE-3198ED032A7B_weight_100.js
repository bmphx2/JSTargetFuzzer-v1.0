new Int32Array(16);
new Int32Array(256);
new Uint16Array(8);
const o17 = {
    "maxByteLength": 1073741824,
};
const v19 = new ArrayBuffer(101, o17);
const v21 = new Uint8ClampedArray(v19);
const v23 = [v19,256];
Reflect.apply(v21.reduceRight, v21, v23);
