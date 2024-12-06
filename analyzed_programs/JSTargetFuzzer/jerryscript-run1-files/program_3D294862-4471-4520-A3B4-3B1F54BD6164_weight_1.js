function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 16;
    this.d = 16;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 2.0;
    this.d = a13;
}
new F9(v5, F0, 2.0, F9, v4);
new F9(2.0, F0, -931.5482158891149);
new F9(F9, F9, 2.0);
[7,-50860,-9007199254740991,-23125,-4294967297,10000,-268435456,-32546];
[268435440,-9007199254740991,268435441,1661866995,-1041408436,-2147483647,4,-4096];
[36303,11,1073741823,4,10,-1,-1303072424];
new Uint32Array(v4);
const v28 = new Uint8Array(10);
const v31 = new Uint32Array(21, 215831012, 21, -15064);
[2.220446049250313e-16,NaN,1000.0,-Infinity,-2.0,0.8418049481265658];
const v33 = [-2.2250738585072014e-308];
[-1.7976931348623157e+308,2.220446049250313e-16,-1.164834225644419e+308,1000000.0,-1000.0,6.933721250435391e+307,Infinity];
try {
    const t26 = 2.0;
    t26[1000] = v31;
} finally {
    v28.valueOf = 10;
    try { v33.reduce(8); } catch (e) {}
}
+Uint32Array;
