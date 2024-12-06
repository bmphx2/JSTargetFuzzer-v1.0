[];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
}
new F5(1000, 1000);
const v10 = new F5(1000, 1000);
const v11 = new F5(-5, 2078940115);
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v11;
    this.c = a16;
}
new F12(null, v11, -5);
new F12(v10, v11, 1000);
new F12(F5, v11, 2078940115);
new Float32Array(3701);
const v25 = new Int32Array();
const v26 = new Int32Array();
function F27(a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v26;
    this.e = v25;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o37 = {
    set a(a36) {
    },
};
for (let v38 = 0; v38 < 5; v38++) {
    v38.a;
}
const v40 = [-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v42 = [13,9,-12559,-8,-4294967297];
let v43 = [65535,-1139741600];
new Uint8Array(v42);
let v46 = -41990;
const v47 = v43++;
let v48 = --v46;
function f49() {
    return v40;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v48 * (v47 << v46);
