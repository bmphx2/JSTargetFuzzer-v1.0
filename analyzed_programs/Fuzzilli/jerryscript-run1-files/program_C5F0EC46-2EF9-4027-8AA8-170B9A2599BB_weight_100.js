function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -1073741824;
    this.f = -1073741824;
    this.g = -1073741824;
}
new F0();
new F0();
new F0();
new BigInt64Array(8);
new BigInt64Array(6);
let v12 = 1;
new Int32Array(v12);
for (let i19 = 0; i19 < 2; i19++) {
    v12 >>>= i19;
}
