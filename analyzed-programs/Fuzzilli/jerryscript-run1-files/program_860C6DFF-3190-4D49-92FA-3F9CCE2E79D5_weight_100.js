function f0() {
    const o9 = {
        "d": -65537,
        [-5.0]: -5.0,
        "f": -65537,
        65536: -5.0,
        "h": -65537,
        1: -65537,
        ...-5.0,
        set a(a5) {
            typeof this === "undefined";
        },
        ...-5.0,
        __proto__: -65537,
        13: 4,
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
let v12 = f0();
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
}
new F13(v10);
new F13(v12);
new F13(v11);
new Uint8Array(1024);
new Uint8ClampedArray(2618);
new Int32Array(64);
try { f0(v12, ...2618, ...Uint8ClampedArray, Int32Array); } catch (e) {}
v12 -= v10;
new Int32Array(1024);
new Uint16Array(257);
new BigInt64Array(1000);
