function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 9007199254740991;
    this.b = 9007199254740991;
    this.h = 9007199254740991;
}
const v3 = new F0();
const v4 = new F0(v3, F0);
new F0();
function f6() {
    return v3;
}
function f10(a11, a12, a13, a14) {
    const o22 = {
        set h(a16) {
            a13[2] <<= a12;
        },
        set g(a18) {
            const v19 = [-35327,f6,this];
            [v19,F0];
            [v19,this,v4,f6,-35327];
        },
        "a": a13,
        ...a13,
    };
    return o22;
}
f10(9351, 2, v3, 2);
f10(2, 2, v4, 2);
f10(-35327, 9351, v4, 9351);
new Float32Array(3701);
const v31 = new Int32Array();
const v32 = new Int32Array();
function F33(a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v32;
    this.e = v31;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o43 = {
    set a(a42) {
    },
};
for (let v44 = 0; v44 < 5; v44++) {
    o43.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v48 = [13,9,-12559,-8,-4294967297];
let v49 = [65535,-1139741600];
new Uint8Array(v48);
let v52 = -41990;
const v53 = v49++;
let v54 = --v52;
function f55() {
    return f55;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v54 * (v53 << v52);
