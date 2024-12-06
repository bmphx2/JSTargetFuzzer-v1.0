function f0() {
    const o13 = {
        ..."random",
        ["random"](a5) {
            const o8 = {
                "maxByteLength": 64,
            };
            const v10 = new ArrayBuffer(64, o8);
            new DataView(v10);
            return v10;
        },
    };
    return o13;
}
const v14 = f0();
f0();
const v16 = f0();
function f17(a18, a19) {
    const o20 = {
        __proto__: a19,
        ...a19,
        "g": a19,
        "d": v14,
        [a18]: a18,
        9: a19,
        "c": a18,
        "e": f0,
        "h": a18,
        [f0]: v16,
        "f": a18,
    };
    return a19;
}
const v21 = f17(f0, v16);
f17(v16, v16);
f17(v16, v21);
const v29 = new Uint16Array(1);
const v32 = new Float32Array(1000);
v14[Float32Array];
v29[f17];
[];
const v41 = new Uint8Array(41);
function f42() {
    return v32;
}
new BigInt64Array(16);
new Uint16Array(14);
new Uint8Array(256);
let {"byteLength":v52,"byteOffset":v53,"length":v54,} = v41;
v41.c = 14;
with (v41.__proto__) {
    try { a(); } catch (e) {}
}
