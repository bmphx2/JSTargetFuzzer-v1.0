function f0() {
    const o15 = {
        set e(a5) {
            new Uint8Array(16);
            new Int8Array(256);
            new Float32Array(16);
        },
    };
    return o15;
}
const v16 = f0();
const v17 = f0();
f0();
new Array(5, v16);
new BigInt64Array(1000);
new Uint16Array(7);
new EvalError(268435456, Array, v17, 1000);
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
