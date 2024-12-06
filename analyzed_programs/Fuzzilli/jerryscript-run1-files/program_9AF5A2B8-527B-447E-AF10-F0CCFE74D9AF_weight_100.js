new Uint8ClampedArray(1189);
new Float64Array(2);
new Uint8ClampedArray(1189);
const v14 = [268435456,268435456,268435456,268435456];
const v15 = [678529128];
const v16 = [v15,268435456,v14];
function f17() {
    return v14;
}
const v19 = new Uint32Array(v14, 268435456, -7n);
let v21;
try { v21 = v16.join(Int8Array); } catch (e) {}
v21 ** v15;
function* f23(a24, a25, a26) {
    Int8Array(v14[a24](), ...v19);
    yield* "shift";
    return a24;
}
f23(678529128, f23, v19);
