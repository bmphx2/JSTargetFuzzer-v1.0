function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
}
new F6(65289n, 33342n);
new F6(268435441n, 4096n);
new F6(65537n, 33342n);
function F19() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -256;
    this.c = -256;
}
const v22 = new F19();
new F19();
const v24 = new F19();
const v25 = [16,9223372036854775807,-14444,2147483647];
const v26 = [6];
const v27 = [-1220893393,1073741825];
const v29 = new WeakSet();
function f30(a31, a32) {
    v29.toString = a31;
    v27.length &= a32;
    function f33() {
        return a31;
    }
    const o46 = {
        o(a35, a36, a37, a38) {
            a37 %= v29;
            return a35;
        },
        p(a40, a41) {
            Object.defineProperty(v29, 65289n, { configurable: true, value: -2147483648 });
            a41[2] = a31;
            return F19;
        },
        set a(a43) {
            this[Symbol.replace] = a32;
        },
        "c": v22,
        __proto__: a32,
        "g": a32,
        "d": v27,
        "f": a32,
        "e": v27,
        ...v25,
    };
    return o46;
}
f30(v26, v24);
f30(v26, f30(v26, v22));
function F50() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -268435456;
    this.f = -268435456;
}
const v53 = new F50();
new F50();
new F50();
const v58 = new Int16Array(3);
v58.buffer;
~v53;
+16;
Math.max(-2.2250738585072014e-308);
Math.atan(v53);
Math.hypot(16);
new Uint16Array(5);
new Uint32Array(3);
function f78() {
    return -724187226;
}
[-296.82677549383425,-8.723002617238761e+307];
const v83 = [182.6554548534018,1e-15,0.45524480994671856];
const v84 = [-1000.0,163421.73821042804,-180676.84376319742];
const v89 = new WeakMap();
v84 && v89["set"](v83, -4294967297);
("set").__proto__;
class C95 extends Set {
}
const v96 = new C95();
const v97 = new C95();
const v100 = new Uint16Array(256);
const v102 = new Int16Array(v97, 256, 256);
v96.add(v102);
v97.delete(...v100);
let v105 = 0;
do {
    function f106() {
        return -9007199254740991;
    }
    v105++;
} while (v105 < 10)
