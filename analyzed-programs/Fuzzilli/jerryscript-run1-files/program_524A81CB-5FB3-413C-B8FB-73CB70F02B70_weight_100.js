function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a10;
}
const v11 = new F6(-1000000000000.0, -9223372036854775808n, -9223372036854775808n);
const v12 = new F6(1000000000000.0, 65536n, v11);
new F6(-1000000000000.0, 65536n, -1000000000000.0);
new Uint8Array(4);
const v19 = new Int8Array(3933);
const v22 = new Int16Array(2911);
Math.sign(v12);
Math.expm1(v12);
const v28 = 3933 / 3933;
-65535 / v19;
[2911,v22,v11];
[[65536n,3933],v28,Int8Array];
