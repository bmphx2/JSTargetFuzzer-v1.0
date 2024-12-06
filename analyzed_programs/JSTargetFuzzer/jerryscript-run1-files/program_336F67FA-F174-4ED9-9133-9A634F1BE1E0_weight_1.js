function F0() {
    if (!new.target) { throw 'must be called with new'; }
    F0.f = -256;
    this.d = -256;
    this.g = -256;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o16 = {
        "c": F0,
        "f": a7,
        ...v3,
        [a7](a9, a10) {
            (-25398 | a7)[v3];
            return -25398;
        },
        "a": v4,
        __proto__: v5,
        "b": a7,
        "h": v3,
    };
    return a7;
}
f6(v3);
f6(F0);
f6(f6);
new Float32Array(3032);
let v23 = 29;
new Float64Array(v23);
new Float32Array(2);
const v31 = new Uint32Array(181);
let v34 = new BigUint64Array(1);
let v35 = 253;
[v35,,v23,v34] = v31;
try { BigUint64Array["abs"](181, v35, BigUint64Array); } catch (e) {}
new Uint16Array(v35);
for (let i48 = 0; i48 < 2; i48++) {
    const v54 = new Function("x");
    v54.name;
}
Function();
