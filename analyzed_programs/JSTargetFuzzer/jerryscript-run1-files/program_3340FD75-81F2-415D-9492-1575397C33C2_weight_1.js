function f0() {
    const o12 = {
        ..."string",
        get c() {
            const o7 = {
                "maxByteLength": 1678703961,
            };
            const v9 = new ArrayBuffer(8, o7);
            new Uint32Array(v9);
            return "string";
        },
        ..."p",
    };
    return o12;
}
const v13 = f0();
const v14 = f0();
const v16 = [v14,v14,v13,f0()];
[[v16,v13,v16]];
new Int32Array(257);
new Int16Array(7);
new Uint8Array(8);
const v33 = new Uint32Array(181);
let v35 = BigUint64Array;
let v36 = new v35(1);
let v37 = 253;
[v37,,v35,v36] = v33;
try { v35["abs"](181, v37, v35); } catch (e) {}
new Uint16Array(v37);
for (let i50 = 0; i50 < 2; i50++) {
    const v56 = new Function("x");
    v56.name;
}
Function();
