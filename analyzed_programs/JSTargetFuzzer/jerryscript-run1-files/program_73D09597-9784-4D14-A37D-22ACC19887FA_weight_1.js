const v1 = new Date();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a4;
    this.h = v1;
    this.d = a4;
}
const v6 = new F2(F2, v1);
const v7 = new F2(Date, Date);
const v8 = new F2(v7, v6);
function f9(a10, a11, a12, a13) {
    const o21 = {
        __proto__: a12,
        o(a15, a16, a17) {
            for (let v18 = 0; v18 < 32; v18++) {
                a17["p" + v18] = v18;
            }
            return a17;
        },
        "d": v8,
    };
    return o21;
}
f9(Date, v7, v6, v6);
f9(v8, v1, v8, f9(v7, v6, v1, v8));
new Float32Array(3701);
const v30 = new Int32Array();
const v31 = new Int32Array();
function F32(a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v31;
    this.e = v30;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o42 = {
    set a(a41) {
    },
};
for (let v43 = 0; v43 < 5; v43++) {
    o42.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
let v47 = [13,9,-12559,-8,-4294967297];
let v48 = [65535,-1139741600];
new Uint8Array(v47);
let v51 = -41990;
const v52 = v48++;
--v51;
function f54() {
    return f54;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v47 * (v52 << v51);
