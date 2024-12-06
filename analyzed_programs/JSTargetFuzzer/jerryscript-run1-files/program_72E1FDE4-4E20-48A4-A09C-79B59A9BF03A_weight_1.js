function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9223372036854775808;
    this.a = -9223372036854775808;
    this.g = -9223372036854775808;
}
new F0();
new F0();
new F0();
new Float64Array(1);
new BigUint64Array(11);
new Int8Array(3826);
new Set();
let v18 = new WeakMap();
v18.__proto__;
v18 ^= v18;
