function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -256;
    this.c = -256;
    this.d = -256;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a8;
    this.d = a8;
}
const v9 = new F6(v3);
new F6(v4);
new F6(v5);
const v13 = new WeakMap();
function f14() {
    return v13;
}
const v19 = new WeakMap();
const v29 = new BigUint64Array(3);
new Uint32Array(2);
let v34 = 0;
while (v34 < 1) {
    v9.length = 2;
    v34++;
}
const v40 = new Uint16Array(255);
try { new BigUint64Array(...v40, BigUint64Array, ...undefined, "bigint", ...v19); } catch (e) {}
[-6,-1024,5];
[-2147483647,268435456,-15,-2147483648,-9223372036854775807,105026840];
[-485646260,536870889,287975270,128,679329586,268435441,-4294967295,-68651252,1];
Math.acos(v29);
Math.acos(-8);
Math.log10(-8);
Math.trunc(-8);
-8 - -8;
Math.cos(-8);
