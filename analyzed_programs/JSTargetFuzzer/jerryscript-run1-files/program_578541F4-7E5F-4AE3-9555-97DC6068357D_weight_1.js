function f0() {
}
function f3(a4, a5) {
    a5 = a4;
    try { a4(a4, a5); } catch (e) {}
}
new Promise(f3);
new Uint8ClampedArray(2480);
new Uint16Array(2831);
new BigUint64Array(1549);
new Set();
function F19() {
    if (!new.target) { throw 'must be called with new'; }
}
const v21 = new F19();
new F19();
const v23 = [v21];
[v21,v23,v23];
class C25 {
    valueOf(a27, a28, a29, a30) {
    }
}
const v31 = new C25();
0.0 ** 11;
0.0 & 11;
0.0 * v31;
new BigInt64Array(3847);
