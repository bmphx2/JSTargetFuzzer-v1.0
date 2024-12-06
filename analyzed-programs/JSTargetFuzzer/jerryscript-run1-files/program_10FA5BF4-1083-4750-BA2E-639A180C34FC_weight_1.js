function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -43728;
    this.b = -43728;
    this.a = -43728;
}
new F0();
new F0();
new F0();
new BigUint64Array(129);
new BigInt64Array(230);
new Float64Array(512);
let v15 = -513909666n;
v15 ^= -2147483647n;
