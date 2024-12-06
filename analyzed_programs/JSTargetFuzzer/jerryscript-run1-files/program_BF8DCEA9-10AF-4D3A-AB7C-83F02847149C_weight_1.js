const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    this.c = a5;
}
const v6 = new F2(F2, WeakMap);
const v7 = new F2(v1, v6);
new F2(F2, v7);
const v11 = [];
try {
    v11.__proto__ = v11;
} catch(e12) {
}
new Float64Array(77);
const v16 = (-12n).toString();
try { Array.from(9007199254740990, v16); } catch (e) {}
const v21 = [4294967297,128,55693,7146,15,64,1,9007199254740992,15,1024];
const v24 = new Uint16Array(v21, v21);
v21["splice"](1.6056728270117627e+307, v24, "splice");
new Uint8ClampedArray(108);
new Int16Array(1);
let v32 = 58354n;
(v32 <<= 39655n) | v32;
