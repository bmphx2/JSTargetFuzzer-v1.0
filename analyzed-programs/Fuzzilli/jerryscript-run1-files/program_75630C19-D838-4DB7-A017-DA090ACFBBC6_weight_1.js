function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4;
    this.e = 4294967296;
}
let v7 = new F3(4294967296, 4);
new F3(-9223372036854775807, -9223372036854775807);
new F3(4, 4);
let v11 = Int32Array;
new v11(10);
new BigUint64Array(171);
new Uint32Array(255);
for (let i20 = 0; i20 < 1; i20++) {
    +(--v7);
    i20 << i20;
    !v11;
    v11--;
}
