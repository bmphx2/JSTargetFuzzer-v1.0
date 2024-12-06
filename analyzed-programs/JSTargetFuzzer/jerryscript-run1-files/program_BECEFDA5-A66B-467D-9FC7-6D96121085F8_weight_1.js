function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -2;
    this.g = -2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a12;
    this.a = v5;
}
new F9(v5, v4);
new F9(v5, v5);
new F9(v3, v4);
const v18 = new BigInt64Array(16);
v18[0] = 14 !== v18;
v18 << v18;
