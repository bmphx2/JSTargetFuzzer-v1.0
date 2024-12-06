function f0() {
    const v1 = -Infinity;
    const o8 = {
        "h": "o",
        "c": v1,
        0: 2147483649,
        "e": v1,
        ["o"]: v1,
        m(a5, a6) {
            function f7() {
                return a6;
            }
            return 2147483649;
        },
        "b": 2147483649,
        "d": "o",
        "a": "o",
        853: v1,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
function F15(a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a19;
}
new F15(0.3810359462427345, -1000000000.0, 0.3810359462427345);
const v21 = new F15(-1000000000.0, 0.3810359462427345, -1000000.0);
const v22 = new F15(0.3810359462427345, 0.3810359462427345, -1000000.0);
function f23(a24, a25, a26, a27) {
    const o46 = {
        71: F15,
        n(a29, a30, a31, a32) {
            try { new a25(a24, a31, v9, ...11n); } catch (e) {}
            new Uint32Array(9);
            new Uint16Array(2546, a27);
            new Uint8Array(3263);
            return -575850235n;
        },
    };
    return o46;
}
f23(v11, f23, v10, -1000000.0);
f23(v21, v10, v11, -1000000000.0);
f23(v10, v9, v21, 0.3810359462427345, 0.3810359462427345, 0.3810359462427345);
const v51 = Error();
const v53 = new Uint32Array(v22, Uint32Array);
try {
    Object.defineProperty(v53, 2, { configurable: true, set: v51 });
} catch(e55) {
}
