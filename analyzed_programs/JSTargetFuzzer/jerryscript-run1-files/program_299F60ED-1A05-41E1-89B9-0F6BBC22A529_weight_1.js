const v2 = new Float64Array(64);
new Int8Array(64);
new Int8Array(64);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a13;
    this.c = v2;
}
new F9(64, v2, 9);
new F9(64, Int8Array, 238);
new F9(9, Int8Array, 238);
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    a22 >> 51351n;
}
new F19(F19, 51351n, F19, F19);
