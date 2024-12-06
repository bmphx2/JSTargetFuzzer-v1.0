const v2 = new Uint16Array(129);
const v5 = new Uint32Array(12);
const v8 = new Uint8ClampedArray(256);
function f9(a10, a11, a12) {
    const o21 = {
        "h": v2,
        p(a14, a15, a16) {
            try { a16.valueOf(a10, this, Uint16Array, a15); } catch (e) {}
            256 >>> a14;
            v8["toLocaleString"](a16);
            return a12;
        },
        "a": v5,
        "c": 256,
        512: Uint8ClampedArray,
        9: a10,
        "d": a11,
        ...v2,
        ...a11,
        [Uint16Array]: 12,
        [a10]: Uint8ClampedArray,
    };
    return o21;
}
with (v8) {
    byteLength = 12;
    delete v5[536870887];
}
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a25;
    this.h = f9;
}
new F23(129, 12);
new F23(256, 256);
new F23(256, 12);
f9(129, f9, 256);
f9(129, Uint8ClampedArray, 12);
f9(256, v8, 12);
for (const v34 in Math) {
}
