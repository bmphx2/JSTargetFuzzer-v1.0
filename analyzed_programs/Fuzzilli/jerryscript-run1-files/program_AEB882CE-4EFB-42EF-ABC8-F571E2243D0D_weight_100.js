new Int16Array(1011);
new BigUint64Array(6);
const v8 = new Uint8Array(3205);
try { Uint8Array(v8, -1, 6); } catch (e) {}
v8[Int16Array];
const o19 = {
    "maxByteLength": 2536,
};
const v21 = new SharedArrayBuffer(256, o19);
new Int16Array(v21);
