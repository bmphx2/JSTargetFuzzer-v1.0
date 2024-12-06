function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -2147483648;
    this.b = -2147483648;
}
const v3 = new F0();
new F0();
new F0();
new Float32Array(3);
const v11 = new Int32Array(2689);
const v14 = new Uint8Array(128);
v3[v14] = v11;
const o17 = {
    "maxByteLength": 127,
};
const v19 = new SharedArrayBuffer(127, o17);
new Uint32Array(v19);
