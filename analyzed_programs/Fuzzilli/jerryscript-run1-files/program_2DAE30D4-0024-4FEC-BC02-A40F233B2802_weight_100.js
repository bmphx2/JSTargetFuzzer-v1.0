function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 2;
    this.c = 2;
}
new F0();
new F0();
new F0();
new BigInt64Array(129);
new Float32Array(129);
new Int32Array(6);
let v23 = 8;
try {
const t0 = 6;
t0();
} catch (e) {}
Int32Array && (v23 = 129);
const v27 = new WeakSet();
new Int32Array(v27);
7 ** (7 >>> 4294967295);
Math.sqrt(-55150);
Math.acosh(4294967295);
