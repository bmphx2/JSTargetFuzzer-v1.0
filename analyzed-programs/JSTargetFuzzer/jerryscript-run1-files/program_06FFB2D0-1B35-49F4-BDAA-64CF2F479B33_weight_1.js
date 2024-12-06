function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a9;
    this.a = a9;
    this.f = -7;
}
new F6(-7, "function");
const v11 = new F6(536870887, "object");
const v12 = new F6(3, "function");
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 536870887;
    this.c = a16;
    this.d = a17;
}
new F13(v11, -7, -7);
new F13(v12, 536870887, 3);
new F13(v11, 536870887, 3);
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
class C42 {
}
const v43 = new C42();
const v44 = [-1000.0,-Infinity,-3.0];
function* f45(a46, a47) {
    yield* v43;
    return f45;
}
const v48 = f45();
const v49 = [8,0,4294967297,-33048,6,1000,983207413];
try { v44["splice"](...v49, ...v48); } catch (e) {}
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v53 = [13,9,-12559,-8,-4294967297];
let v54 = [65535,-1139741600];
new Uint8Array(v53);
let v58 = 0n;
v58 -= 5n;
let v59 = -41990;
const v60 = v54++;
let v61 = --v59;
function f62() {
    return f62;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v61 * (v60 << v59);
