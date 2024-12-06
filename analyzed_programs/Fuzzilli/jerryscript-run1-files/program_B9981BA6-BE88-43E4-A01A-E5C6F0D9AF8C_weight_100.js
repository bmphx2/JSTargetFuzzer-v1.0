function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2061323079;
}
new F0();
const v4 = new F0();
new F0();
new Float32Array(87);
new Int32Array(255);
const v14 = new Uint16Array(2035);
try { v14(); } catch (e) {}
v4[0];
v4[Symbol.toPrimitive] = F0;
const o21 = {
    "maxByteLength": 16,
};
const v23 = new ArrayBuffer(16, o21);
new BigInt64Array(v23);
