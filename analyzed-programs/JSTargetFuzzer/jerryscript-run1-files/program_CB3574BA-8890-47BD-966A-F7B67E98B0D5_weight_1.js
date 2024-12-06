function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1073741824;
}
new F0();
new F0();
const v5 = new F0();
new WeakSet();
for (const v9 in v5) {
}
new Float32Array(53);
new Float32Array(1);
new Uint32Array(1024);
new Float32Array(3701);
const v26 = new Int32Array();
const v27 = new Int32Array();
function F28(a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v27;
    this.e = v26;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o38 = {
    set a(a37) {
    },
};
for (let v39 = 0; v39 < 5; v39++) {
    o38.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v43 = [13,9,-12559,-8,-4294967297];
let v44 = [65535,-1139741600];
const v46 = new Uint8Array(v43);
let v47 = -41990;
let v48 = 0;
do {
    const o51 = {
        "maxByteLength": 4,
    };
    const v53 = new ArrayBuffer(2, o51);
    new Uint8Array(v53);
    v48++;
} while (v48 < 4)
const v59 = v44++;
let v60 = --v47;
function f61() {
    let v62 = 0;
    do {
        try { v46.reduce(f61); } catch (e) {}
        v62++;
    } while (v62 < 8)
    return f61;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v60 * (v59 << v47);
