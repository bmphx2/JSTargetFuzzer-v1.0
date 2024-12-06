function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -256;
    this.c = -256;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v6 = [16,9223372036854775807,-14444,2147483647];
const v7 = [6];
const v8 = [-1220893393,1073741825];
const v10 = new WeakSet();
function f11(a12, a13) {
    v10.toString = a12;
    v8.length &= a13;
    function f14() {
        return a12;
    }
    const o24 = {
        o(a16, a17, a18, a19) {
            a18 %= v10;
            return a16;
        },
        set a(a21) {
            this[Symbol.replace] = a13;
        },
        "c": v3,
        __proto__: a13,
        "g": a13,
        "d": v8,
        "f": a13,
        "e": v8,
        ...v6,
    };
    return o24;
}
f11(v7, v5);
f11(v7, f11(v7, v3));
function F28() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -268435456;
    this.f = -268435456;
}
const v31 = new F28();
new F28();
new F28();
const v36 = new Int16Array(3);
v36.buffer;
~v31;
+16;
Math.max(-2.2250738585072014e-308);
Math.atan(v31);
Math.hypot(16);
new Uint16Array(5);
new Uint32Array(3);
function f56() {
    return -724187226;
}
[-296.82677549383425,-8.723002617238761e+307];
const v61 = [182.6554548534018,1e-15,0.45524480994671856];
const v62 = [-1000.0,163421.73821042804,-180676.84376319742];
const v67 = new WeakMap();
v62 && v67["set"](v61, -4294967297);
("set").__proto__;
class C73 extends Set {
}
const v74 = new C73();
const v75 = new C73();
const v78 = new Uint16Array(256);
const v80 = new Int16Array(v75, 256, 256);
v74.add(v80);
v75.delete(...v78);
let v83 = 0;
do {
    function f84() {
        return -9007199254740991;
    }
    v83++;
} while (v83 < 10)
