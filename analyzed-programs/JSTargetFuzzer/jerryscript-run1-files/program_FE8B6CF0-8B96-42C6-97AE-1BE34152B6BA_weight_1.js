function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1;
}
new F0();
new F0();
new F0();
new Array(443);
const v14 = new Int16Array(3);
new Float64Array(1024);
new Int32Array(150);
new Float32Array(3701);
const v26 = new Int32Array(150, 443);
const v27 = new Int32Array(Float64Array, v14);
function F28(a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v27;
    this.e = v26;
}
new Int32Array(6);
new Float32Array(0, -1000.0);
[-Infinity];
const o38 = {
    set message(a37) {
    },
};
for (let v39 = 0; v39 < 5; v39++) {
    o38.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v43 = [-60501,13196,-536870912];
let v44 = [65535,-1139741600];
new Uint8Array(v43);
let v47 = -41990;
const v48 = v44++;
let v49 = --v47;
function f50() {
    return f50;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
v49-- * (v48 << v47);
