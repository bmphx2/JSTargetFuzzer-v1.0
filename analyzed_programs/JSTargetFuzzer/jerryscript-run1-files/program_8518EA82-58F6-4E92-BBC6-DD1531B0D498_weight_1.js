const v2 = new Uint8ClampedArray(15);
const v5 = new Int8Array(3558);
const v8 = new Uint8ClampedArray(433);
function f9(a10, a11) {
    const o20 = {
        ...v5,
        [Int8Array](a13, a14, a15) {
            a15 * this;
            v8.__proto__ = this;
            v8.byteOffset = a15;
            return a11;
        },
        "d": a10,
        "b": Int8Array,
        "g": 433,
    };
    return o20;
}
const v21 = f9(3558, 15);
const v22 = f9(433, 3558);
f9(433, 433);
f9(3558, 15);
let v25;
try { v25 = f9(v21, 433, ...Uint8ClampedArray, Uint8ClampedArray); } catch (e) {}
if (v2 >= v25) {
    v5[0] = v22;
} else {
    v21[560];
}
