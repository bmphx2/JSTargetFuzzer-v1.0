function f1() {
    const o12 = {
        "h": undefined,
        "e": undefined,
        valueOf() {
            new Uint8Array(9);
            new Float64Array(512);
            const v11 = new Uint8ClampedArray(1);
            return v11;
        },
    };
    return o12;
}
const v13 = f1();
const v14 = f1();
const v15 = f1();
function f16(a17, a18) {
    const o26 = {
        [a18]: v13,
        "b": v15,
        "f": a18,
        toString(a20, a21, a22) {
            return a18;
        },
        536870887: v13,
        "a": a18,
        __proto__: a17,
    };
    return o26;
}
f16(v13, v15);
f16(v14, v14);
f16(v15, v14);
new WeakMap();
function f35(a36, a37) {
    new Float32Array(2280);
    new Int8Array();
    return Int8Array;
}
new Promise(f35);
