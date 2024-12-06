function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0(v4, v4, F0);
new BigInt64Array(3, v5, 3);
new BigInt64Array(3);
const v14 = new Int32Array(4, Int32Array);
const v17 = [2147483648];
v17[536870889] <<= 1.0;
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
    a20.b = a20;
    v17.length %= 3355;
}
new F18(v17, 3, v3, v14);
