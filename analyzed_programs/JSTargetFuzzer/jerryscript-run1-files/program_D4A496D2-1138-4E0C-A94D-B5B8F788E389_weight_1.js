function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9007199254740990;
    this.h = -9007199254740990;
    this.d = -9007199254740990;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = new F0();
const v9 = v3.d;
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a14;
    this.f = a14;
}
new F10(v4, v5, v8);
new F10(v8, v5, v8);
new F10(v5, v9, v5);
let v18 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
v18.copyWithin(6);
--v18;
let v21 = 9n;
v21--;
new Int16Array(9);
new Uint32Array(6);
new BigUint64Array(203);
Math.hypot(536870889, [875.0714564357145,-1.0587744003900286e+308,1e-15,1000.0,321.24286267973594,-2.220446049250313e-16,4.0], 127);
