function f0() {
}
new Uint8Array(5);
new BigInt64Array(16);
new Float32Array(4);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = Float32Array;
    this.h = a14;
}
new F10(16, 4, 4, 4);
const v17 = new F10(16, f0, 5, 4);
new F10(4, v17, 16, 16);
function f22(a23) {
    return a23;
}
("1073741824").match(f22);
-34557n == -9223372036854775808;
