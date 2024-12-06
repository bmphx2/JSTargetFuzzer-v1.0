function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 3;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
    this.h = a9;
    a9.c = a8;
}
new F6(v4, v5);
new F6(v3, v3);
new F6(v5, v3);
let v13 = 1000;
new Float32Array(3701);
const v21 = new Int32Array();
const v22 = new Int32Array();
function F23(a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v22;
    this.e = v21;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o33 = {
    set a(a32) {
    },
};
for (let v34 = 0; v34 < 5; v34++) {
    o33.a;
}
[-6.568975937209441,1.0,-Infinity];
let v37 = [0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v38 = [13,9,-12559,-8,-4294967297];
[65535,-1139741600];
new Uint8Array(v38);
let v42 = -41990;
v37++;
--v42;
function f45() {
    return f45;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
const v49 = --v13;
3701 << v42;
v49 * v37;
