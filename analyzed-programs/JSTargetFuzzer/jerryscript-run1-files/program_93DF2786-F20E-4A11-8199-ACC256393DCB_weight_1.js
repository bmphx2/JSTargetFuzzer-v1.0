function f0() {
}
function f1() {
    return f0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5.g = f0;
    this.c = a5;
    this.d = f1;
}
const v6 = new F2(F2, f1);
new F2(f1, v6);
const v8 = new F2(v6, v6);
[-1901578283,-9223372036854775807,268435439,-4294967295,128,36675,-32934,2147483648];
const v10 = [-13,22563,-65536];
[43425,-6,-2147483649,65536,1808811701,0,255,47000,7];
new Float64Array(5);
new Float64Array(1000);
new Float32Array(257);
new Float32Array(3701);
new Int32Array();
const v27 = new Int32Array();
function F28(a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v27;
    this.e = v27;
}
new Int32Array(6);
let v32 = 0;
new Float32Array(v32);
[-Infinity];
const o38 = {
    ...v27,
    ...v10,
    "b": v10,
    __proto__: v8,
    "a": Int32Array,
    set a(a37) {
    },
};
for (let v39 = 0; v39 < 5; v39++) {
    o38.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
let v43 = [13,9,-12559,-8,-4294967297];
[65535,-1139741600];
new Uint8Array(v43);
const v48 = v43++;
let v49 = --v32;
function f50() {
    return Float32Array;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
const v54 = --v49;
v48 << -41990;
v54 * v54;
