class C3 {
    o(a5, a6) {
        a5 = 55431;
        function F7(a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = a10;
            this.f = a11;
        }
        new F7(55431, a5, F7);
        const v13 = new F7(a6, "e", this);
        new F7(v13, this, a6);
        return 1000000.0;
    }
}
new C3();
new C3();
new C3();
new Date();
new Float32Array(3701);
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
const v53 = new Map();
for (let v54 = 0; v54 < 5; v54++) {
    v53["set"](v54);
}
v53.get(Map);
function f58() {
    return f58;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v51 * (v50 << v49);
