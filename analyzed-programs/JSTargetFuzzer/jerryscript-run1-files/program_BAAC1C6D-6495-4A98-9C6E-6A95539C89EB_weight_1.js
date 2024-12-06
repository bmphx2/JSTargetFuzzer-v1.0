function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    this.f = f0;
    this.h = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6() {
    return v3;
}
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v3;
    this.e = a9;
    this.f = this;
}
new F7(v4, v4, v4);
const v13 = new F7(v3, F7, v4);
const v14 = new F7(v4, v4, v5);
function f15(a16, a17) {
    const o32 = {
        [a16](a19, a20, a21, a22) {
            new Int8Array(3474);
            new Float32Array(87);
            new Int32Array(1000);
            return 87;
        },
        231: a16,
        [a17]: a16,
    };
    return o32;
}
f15(v13, v14);
f15(f15(v5, v13), v14);
new Float32Array(3701);
const v41 = new Int32Array();
const v42 = new Int32Array();
function F43(a45) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v42;
    this.e = v41;
}
new Int32Array(6);
new Float32Array(v42);
[-Infinity];
const o53 = {
    set a(a52) {
    },
};
for (let v54 = 0; v54 < 5; v54++) {
    o53.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v58 = [13,9,-12559,-8,-4294967297];
let v59 = [65535,-1139741600];
new Uint8Array(v58);
let v62 = -41990;
const v63 = v59++;
let v64 = --v62;
function f65() {
    return f65;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v64 * (v63 << v62);
