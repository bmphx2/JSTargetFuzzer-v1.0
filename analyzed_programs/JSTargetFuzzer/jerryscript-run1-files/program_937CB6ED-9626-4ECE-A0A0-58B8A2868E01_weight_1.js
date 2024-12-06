const v2 = new Uint32Array(3);
try { v2.join(Uint32Array); } catch (e) {}
v2[Uint16Array];
new BigUint64Array(3706);
new Uint8Array(8);
new Int16Array(1872);
new Uint16Array(v2);
new TypeError(128, 128, Uint32Array, TypeError);
RegExp.bind(RegExp);
const o25 = {
    ...Uint16Array,
};
