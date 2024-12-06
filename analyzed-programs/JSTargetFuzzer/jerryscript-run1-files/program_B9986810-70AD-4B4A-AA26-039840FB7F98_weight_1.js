const v2 = new Int32Array(177);
new BigInt64Array(2001);
const v8 = new Float64Array(257);
function f9(a10, a11, a12, a13) {
    const o27 = {
        __proto__: v8,
        "a": Float64Array,
        "b": 257,
        7: f9,
        [a10]: f9,
        set h(a15) {
            const o16 = {
            };
            new Proxy(this, o16);
            for (let v20 = 0; v20 < 32; v20++) {
                v2["p" + v20] = v20;
            }
            v8["includes"](177, 177);
            Object.defineProperty(v8, "g", { writable: true, set: f9 });
            a13[Symbol.toStringTag] = o16;
            v8.byteOffset;
        },
        [Int32Array]: v2,
        54: 177,
    };
    return o27;
}
f9(257, 257, 177, 257);
f9(257, 2001, 2001, 257);
f9(257, 257, 2001, 257);
try { Uint8Array(); } catch (e) {}
