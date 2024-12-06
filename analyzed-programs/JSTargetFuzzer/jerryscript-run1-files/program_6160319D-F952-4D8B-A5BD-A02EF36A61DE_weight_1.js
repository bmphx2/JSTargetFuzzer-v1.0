function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
}
const v3 = new F1();
const v4 = new F1(v3, F1, v3);
const v5 = new F1();
const v6 = [v4,v5,F1];
[[F1,f0,v5],v5,v6,f0,v3];
new Float32Array(434);
new Float64Array(6);
new BigUint64Array(4096);
new Float32Array(3701);
const v23 = [-47.84703007518738,0.28153212009585815,-2765.002986162319,5.121464143211062e+307,-689959.9434435563,52370.156167532085,-4.0,106174.3506570668,0.3673928104761456];
const v25 = new WeakMap();
v25["get"](v23);
const v28 = new Int32Array();
const v29 = new Int32Array();
function F30(a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v29;
    this.e = v28;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o40 = {
    set a(a39) {
    },
};
for (let v41 = 0; v41 < 5; v41++) {
    o40.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v45 = [13,9,-12559,-8,-4294967297];
let v46 = [65535,-1139741600];
new Uint8Array(v45);
let v49 = -41990;
const v50 = v46++;
let v51 = --v49;
function f52() {
    return f52;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v51 * (v50 << v49);
