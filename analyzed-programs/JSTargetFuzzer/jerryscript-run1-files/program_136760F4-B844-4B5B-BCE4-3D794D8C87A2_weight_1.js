const v1 = new WeakSet();
const v2 = [WeakSet,v1,WeakSet,WeakSet,v1];
const v3 = [WeakSet,v1];
const v4 = [v2,v2];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a7;
    this.a = a8;
}
new F5(v2, v2);
new F5(v4, v3);
new F5(v2, v4);
new Map();
new Float32Array(3701);
const v22 = new Int32Array();
const v23 = new Int32Array();
function F24(a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v23;
    this.e = v22;
}
new Int32Array(6);
const v30 = new Float32Array(0);
[-Infinity];
const o34 = {
    set a(a33) {
    },
};
for (let v35 = 0; v35 < 5; v35++) {
    o34.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const o39 = {
    [v30]: v3,
    "c": 6,
};
v22.__proto__;
const v41 = [13,9,-12559,-8,-4294967297];
let v42 = [65535,-1139741600];
new Uint8Array(v41);
let v45 = -41990;
const v46 = v42++;
let v47 = --v45;
function f48() {
    return f48;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v47 * (v46 << v45);
