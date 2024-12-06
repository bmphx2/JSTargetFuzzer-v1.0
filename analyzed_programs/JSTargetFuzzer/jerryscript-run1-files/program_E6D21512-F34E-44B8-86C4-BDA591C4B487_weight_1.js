new Float32Array(6);
const v5 = new Int8Array(127);
const v8 = new Uint32Array(0);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = Float32Array;
}
const v14 = new F9(6, 127, 127);
const v15 = new F9(127, 6, 127);
const v16 = new F9(127, 0, 0);
const o17 = {
    __proto__: v15,
    "a": v8,
};
v15.b = o17;
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v5;
    this.b = a22;
    this.f = Uint32Array;
}
new F18(v16, v16, 6, F18);
new F18(v14, v14, 0, Uint32Array);
new F18(v16, v16, 6, F9);
const v27 = [2.292560759434183,747.4706313694942,654856.5011855052,-Infinity,-1000000000.0];
function f28(a29) {
    return v27;
}
v27.forEach(f28);
Math.random();
