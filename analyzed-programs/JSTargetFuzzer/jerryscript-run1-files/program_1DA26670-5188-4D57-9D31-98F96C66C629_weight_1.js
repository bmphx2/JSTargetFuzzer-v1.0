const v2 = new Int8Array(8);
new Int32Array(4096);
new Int16Array(v2);
const o9 = {
};
const v11 = new Proxy(Int32Array, o9);
v11 >> v11;
const v18 = new BigUint64Array(3);
try { v18.map(Array); } catch (e) {}
