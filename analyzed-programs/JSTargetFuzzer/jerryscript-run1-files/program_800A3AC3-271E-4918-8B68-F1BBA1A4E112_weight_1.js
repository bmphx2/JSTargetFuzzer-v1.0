function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 22930;
    this.e = 22930;
    this.a = 22930;
}
new F0();
const v4 = new F0();
const v5 = new F0();
new Date();
new BigInt64Array(3);
new Float32Array(4096);
new Float64Array(6);
for (let i22 = 0; i22 < 3; i22++) {
    v5.__proto__ = v4;
    v4[BigInt64Array] **= 3;
}
