new Uint8ClampedArray(255);
const v5 = new Float64Array(255);
const v8 = new Uint8ClampedArray(Uint8ClampedArray);
let v10 = delete v5[10];
v8.buffer /= 9007199254740990;
for (let v11 = 0; v11 < 32; v11++) {
    v5["p" + v11] = v11;
}
function f18(a19, a20) {
    const o21 = {
        ...a20,
    };
    const o22 = {
    };
    const v24 = new Proxy(Uint8ClampedArray, o22);
    Object.defineProperty(o21, "a", { configurable: true, set: f18 });
    return v24;
}
const v25 = f18(-33749, f18);
f18(3, f18);
for (const v28 of v5) {
    v10 = v28;
    new v25();
}
127 * 3;
