function f3() {
    return 1073741823;
}
function f4(a5, a6) {
    const o13 = {
        p(a8, a9, a10) {
            this.a += a9;
            a10[a6] |= a5;
            Object.defineProperty(this, "d", { configurable: true, set: f3 });
            const v12 = a10.toStringTag;
            a10[v12] = v12;
            return a5;
        },
        9: 255,
        "a": a6,
        "b": -2,
        [255]: a6,
        "d": 255,
    };
    return a6;
}
f4(255, 1073741823);
f4(-2, 255);
f4(f3, -2);
new Int8Array(2);
new BigInt64Array(0);
new Uint8Array(1004);
const v31 = ("3").matchAll("-15");
function F32(a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -19656n;
}
new F32(-4096n, 0, 0);
new F32(-9007199254740992n, -9007199254740992n, -2);
new F32(-4096n, -19656n, 1004);
new Uint8ClampedArray(v31);
