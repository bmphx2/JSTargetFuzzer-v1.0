function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v3;
}
const v10 = new F6(v5, v5);
const v11 = new F6(v4, v5);
const v12 = new F6(v4, v5);
function f13(a14, a15, a16) {
    const o25 = {
        14: a16,
        536870889: v11,
        [v11]: F6,
        ...v11,
        __proto__: a15,
        set c(a18) {
            v10.e = v4;
        },
    };
    return o25;
}
f13(F0, v4, v11);
f13(v12, v3, v10);
f13(F0, v3, v12);
new Float32Array(3701);
const v37 = new Int32Array();
const v38 = new Int32Array();
function F39(a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v38;
    this.e = v37;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o49 = {
    set a(a48) {
    },
};
const v50 = [13,9,-12559,-8,-4294967297];
let v51 = [65535,-1139741600];
new Uint8Array(v50);
let v54 = -41990;
const v55 = v51++;
let v56 = --v54;
--v56 * (v55 << v54);
for (let v60 = 0; v60 < 5; v60++) {
    o49.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v64 = [13,9,-12559,-8,-4294967297];
let v65 = [65535,-1139741600];
new Uint8Array(v64);
let v68 = -41990;
const v69 = v65++;
let v70 = --v68;
function f71() {
    return f71;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v70 * (v69 << v68);
