new WeakSet();
new Uint8Array(64);
new Uint32Array(77);
new Float64Array(1);
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = Uint8Array;
    this.e = 77;
    this.b = Float64Array;
}
new F11(77, 64, 64, F11);
const v18 = new F11(77, 64, 77, WeakSet);
new F11(77, 1, 77, v18);
class C20 {
}
const v21 = new C20();
const v23 = new Uint8Array(v21, C20, Uint8Array);
const o24 = {
};
const v26 = new C20(v23, o24);
const v27 = v21.__proto__;
v26.__proto__ = v27;
const v31 = ([[v27,v27,v27,v27]])["shift"]();
try { v31(Int16Array, Int16Array, Int16Array); } catch (e) {}
