class C3 {
    static get a() {
        this[4294967295] = this;
        for (let v5 = 0; v5 < 32; v5++) {
            this["p" + v5] = v5;
        }
        return this;
    }
    [-2147483648n] = -2147483648n;
    [4096n];
}
new C3();
new C3();
const v10 = new C3();
function f11() {
    return v10;
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a15;
}
new F12(C3, -2147483648n);
new F12(C3, -12n);
new F12(v10, -2147483648n);
new Int8Array(168);
new Int32Array(9);
new Int16Array(2);
new Set();
new WeakMap();
new WeakSet();
const v54 = new URIError(1073741824);
const v57 = new Int16Array(447);
new Uint32Array(2438);
function f64() {
}
v54.description <<= 2006448021;
const v72 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("b").match(v72.copyWithin(v72, v72));
new Uint8Array(0);
const v82 = [-8,4294967295,148900462];
let v83 = RegExp.bind("2147483647", v82);
const v85 = new BigUint64Array(127);
function f86(a87, a88) {
    const o89 = {
        "f": a87,
        ...v83,
        "e": a88,
    };
    return o89;
}
f86(v83, 26357);
f86(v82, 26357);
f86(v72, 0);
v83 /= v85;
new WeakSet();
for (let i100 = 0, i101 = 10; i100 < i101; i100++, i101--) {
    const t56 = "2147483647";
    t56.__proto__ = v57;
    for (let v109 = 0; v109 < 32; v109++) {
        const t59 = "1";
        t59["p" + v109] = v109;
    }
}
new BigInt64Array(2, -14, v57);
([5]).reverse();
