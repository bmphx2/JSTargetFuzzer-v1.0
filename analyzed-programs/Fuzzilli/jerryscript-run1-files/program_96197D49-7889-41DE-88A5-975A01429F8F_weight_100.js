new Int8Array(134);
const v5 = new Uint32Array(1000);
const v8 = new Int16Array(1000);
const v13 = new Set();
const v14 = "number" in "number";
try { ("number").localeCompare("number", "number", "n"); } catch (e) {}
function f16(a17, a18, a19, a20) {
    const o21 = {
        __proto__: v13,
        2147483647: v13,
        "a": a19,
        ...v13,
    };
    return o21;
}
const v22 = f16(1000, 1000, v8, Int16Array);
f16(134, 1000, v14, v5);
f16(134, 1000, Uint32Array, v22);
