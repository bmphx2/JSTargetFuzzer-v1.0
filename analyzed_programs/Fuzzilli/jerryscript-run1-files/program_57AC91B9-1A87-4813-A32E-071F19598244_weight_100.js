function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65536;
    this.e = -65536;
}
new F0();
new F0();
new F0();
const v8 = new Float32Array(5);
new Uint8Array(3060);
new Uint16Array(2);
const o18 = {
    __proto__: v8,
    "a": 1999847717,
};
o18[129] = o18;
new BigUint64Array(127);
new Int32Array(257);
new Int16Array(14);
