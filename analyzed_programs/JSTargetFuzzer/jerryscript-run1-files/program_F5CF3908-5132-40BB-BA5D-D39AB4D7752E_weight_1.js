function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
    this.f = f0;
    this.b = f0;
}
new F1();
new F1();
new F1();
new Uint32Array(9);
let v17 = 0;
while (v17 < 0) {
    [];
    v17++;
}
new BigInt64Array(2836);
new Float32Array(4);
let v26 = -65537n;
try {
    v26 -= SyntaxError(v26).cause;
} catch(e30) {
}
new Uint8ClampedArray([4.0,0.7137662539774001,800.1465636629484]);
new Int8Array(107);
