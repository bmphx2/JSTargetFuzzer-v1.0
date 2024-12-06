const v0 = [];
const v6 = new Uint8ClampedArray(6);
let v7 = 3;
new Uint8ClampedArray(v7);
v7 = 5;
const v12 = v0[132];
v6.length;
let v15;
try { v15 = v12["toString"](4294967295, v12, "toString"); } catch (e) {}
new Int8Array(5);
const v22 = new Int32Array(166);
function f23(a24, a25, a26) {
    const o27 = {
        [v15]: a24,
        "a": -4294967295,
        ...v15,
        [v22]: a26,
        ...a25,
        ...v22,
    };
    return o27;
}
const v28 = f23();
Object.defineProperty(f23(), "a", { configurable: true, enumerable: true, set: f23 });
for (const v30 in v28) {
    delete v22[v30];
}
