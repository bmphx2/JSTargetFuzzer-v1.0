new WeakMap();
new Int32Array(7);
const v7 = new Uint16Array(25);
let v8 = 221;
const v10 = new Uint8Array(v8);
const v11 = v8 + v10;
v8 = v11;
try {
const t0 = 25;
t0(Int32Array, 7, 7);
} catch (e) {}
function f13(a14, a15) {
    const o16 = {
        __proto__: v7,
        1804: a15,
    };
    return o16;
}
f13(f13(v11, f13(v7, v7)), WeakMap);
