function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 10;
    this.e = 10;
    this.a = 10;
}
const v3 = new F0(F0);
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F0;
    this.a = a11;
}
const v14 = new F9(v3, v5, v3);
new F9(v5, v5, v14);
new F9(v3, v4, v4);
new Uint32Array(3);
new Uint8Array(5);
new Float32Array(512);
new Float32Array(3701);
const v31 = new Int32Array();
const v32 = new Int32Array();
function F33(a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v32;
    this.g = -25621n;
    const v38 = new WeakSet();
    v38.delete(Uint32Array);
    this.e = v31;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o48 = {
    set a(a47) {
    },
};
for (let v49 = 0; v49 < 5; v49++) {
    o48.a;
}
[-6.568975937209441,1.0,-Infinity];
[-2.2250738585072014e-308,-8.61882491848764,3.77870156323479e+307];
let v53 = -9n;
v53 **= 9n;
const v55 = [];
Reflect.apply(v55.pop, v55);
const v59 = [65535,1024,-64268,1000,40379,-2029711610,687406173,-5];
let v60 = [65535,-1139741600];
new Uint8Array(v59);
let v63 = -41990;
const v64 = v60++;
let v65 = --v63;
function f66() {
    return f66;
}
f66();
class C68 {
    set e(a70) {
        {
        }
    }
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
const v74 = --v65;
("p").split(5);
function f78(a79, a80) {
    const v83 = ([9,-1314550274,-6,-21927,11,39852,15,1816348659,0,4]).slice;
    return Reflect.apply(v83, v83);
}
v74 * (v64 << v63);
