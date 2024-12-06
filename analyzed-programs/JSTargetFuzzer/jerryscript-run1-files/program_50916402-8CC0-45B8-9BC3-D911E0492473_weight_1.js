function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 8;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
    this.g = a8;
}
const v10 = new F6(v3, v4);
const v11 = new F6(v5, v5);
const v12 = new F6(v4, F6);
let v16 = Int32Array;
let v17 = 55;
let v19 = new Int8Array(v17);
({"byteLength":v17,"length":v19,...v16} = v19);
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a28;
}
new F23(1000000000.0, -1.7976931348623157e+308, v11, v10);
new F23(-1.7976931348623157e+308, -1.7976931348623157e+308, v10, v10);
new F23(-1.7976931348623157e+308, -1.7976931348623157e+308, v11, v12);
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
for (let v50 = 0; v50 < 5; v50++) {
    o49.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v54 = [13,9,-12559,-8,-4294967297];
let v55 = [65535,-1139741600];
new Uint8Array(v54);
let v58 = -41990;
const v59 = v55++;
let v60 = --v58;
function f61() {
    return f61;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v60 * (v59 << v58);
