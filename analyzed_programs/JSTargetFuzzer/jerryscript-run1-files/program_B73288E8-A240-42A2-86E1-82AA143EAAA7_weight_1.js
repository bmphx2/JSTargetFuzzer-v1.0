function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65537;
    this.f = -65537;
}
new F0();
new F0();
new F0();
new Float64Array(4096);
new Float64Array(3234);
new Uint8ClampedArray(166);
const v24 = new ArrayBuffer(10);
new Int8Array(v24, 9);
const v29 = new Date(Math.min(-505138646, Math));
v29.setUTCFullYear(("2147483647")[11], -505138646, 150);
