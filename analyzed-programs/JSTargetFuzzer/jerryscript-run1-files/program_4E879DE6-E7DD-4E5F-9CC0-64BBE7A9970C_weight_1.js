function f0() {
    const o14 = {
        __proto__: "toString",
        ["H7ou"]: "H7ou",
        ["toString"](a5, a6) {
            const o9 = {
                "maxByteLength": 1363648572,
            };
            const v11 = new SharedArrayBuffer(257, o9);
            new BigUint64Array(v11);
            return 4.0;
        },
    };
    return o14;
}
const v15 = f0();
const v16 = f0();
f0();
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a20;
}
const v22 = new F18(v15, v16);
new F18(v15, v22);
new F18(v22, v16);
const v30 = String(1000);
const v31 = [256,-14,536870912,1073741824,-9007199254740990,536870889,9,4294967296];
let v32 = 0;
while (v32 < 2) {
    for (let v35 = 0; v35 < 5; v35++) {
        v31["p" + v35] = v35;
    }
    v32++;
}
v30["split"]("2147483648");
