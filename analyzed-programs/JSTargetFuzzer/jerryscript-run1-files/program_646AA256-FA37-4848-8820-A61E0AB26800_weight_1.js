class C3 {
    constructor(a5, a6) {
        const o9 = {
            "maxByteLength": 1073741823,
        };
        const v11 = new SharedArrayBuffer(1024, o9);
        new BigInt64Array(v11);
    }
}
const v14 = new C3(C3, 1000);
const v15 = new C3(v14, C3);
new C3(v15, v14);
function f17() {
    return v14;
}
C3[10000];
for (let v22 = 0; v22 < 32; v22++) {
    C3["p" + v22] = v22;
}
const v26 = f17 ** v14;
const v27 = C3[f17];
try { new v27(v27, -1011413391, v26, 1000, v26); } catch (e) {}
