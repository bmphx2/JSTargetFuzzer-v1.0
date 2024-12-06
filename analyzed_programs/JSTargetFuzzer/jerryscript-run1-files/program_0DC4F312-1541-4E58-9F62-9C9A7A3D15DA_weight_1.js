function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
}
new F1();
new F1();
new F1();
function F9() {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F9();
const v12 = new F9();
const v13 = new F9();
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v12;
    this.e = v11;
}
const v17 = new F14();
const v18 = new F14(v17);
new Uint8ClampedArray();
const v22 = new BigUint64Array(v18, BigUint64Array);
function f24() {
    return 2n;
}
Object.defineProperty(v13, "a", { configurable: true, get: f24 });
let v27;
try { v27 = v17.setSeconds(); } catch (e) {}
const v28 = new f24();
delete v22[v28];
const t31 = 16;
t31.toString = f24;
const t34 = f24();
const v31 = delete t34[f24];
function f32() {
    return v31;
}
const v35 = new Uint8Array(v11, v27);
Object.defineProperty(v18, 5n, { configurable: true, enumerable: true, value: 9007199254740992 });
let v36 = Float32Array;
const v37 = new v36();
Number();
new BigInt64Array();
new Uint32Array();
v36 += v36;
let v45;
try { v45 = gc(v35); } catch (e) {}
const v47 = [v45];
Reflect.apply(v37.sort, v37);
v47.flat();
new WeakMap();
new Float32Array(3701);
const v61 = new Int32Array();
const v62 = new Int32Array();
function F63(a65) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v62;
    this.e = v61;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o73 = {
    set a(a72) {
    },
};
for (let v74 = 0; v74 < 5; v74++) {
    o73.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v78 = [13,9,-12559,-8,-4294967297];
let v79 = [65535,-1139741600];
new Uint8Array(v78);
let v82 = -41990;
const v83 = v79++;
try { Map(); } catch (e) {}
let v86 = --v82;
function f87() {
    return f87;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v86 * (v83 << v82);
