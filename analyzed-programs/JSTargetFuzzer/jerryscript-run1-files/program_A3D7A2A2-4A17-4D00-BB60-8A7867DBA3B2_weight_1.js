function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -47360;
    this.b = -47360;
    this.match = -47360;
}
const v3 = new F0();
const v4 = new F0(v3);
const v5 = new F0(v4, v3, v4);
const v8 = new Uint16Array(12);
const v11 = new Uint8ClampedArray(1375);
let v16;
try { v16 = v4.n(v11, "constructor", Uint8ClampedArray); } catch (e) {}
v16 >>= Uint16Array;
v4 !== 1375;
const v18 = "2Pp" || Uint8ClampedArray;
function f19() {
    return v18;
}
const v22 = ("2Pp")[Symbol.iterator];
const v24 = new BigInt64Array(256, v11, 1375, 12);
async function f25(a26, a27, a28) {
    const v31 = new ArrayBuffer(8);
    new Int32Array(v31);
    return a28;
}
const v34 = (a35, a36) => {
    'use strict';
    let v37;
    try { v37 = v22(v24); } catch (e) {}
    let v38;
    try { v38 = v37.setBigInt64(a36, v34); } catch (e) {}
    Object.defineProperty(v5, 1521825985, { enumerable: true, set: f19 });
    v5 / v38;
    for (let v41 = 0; v41 < 32; v41++) {
        const t35 = "constructor";
        t35["p" + v41] = v41;
    }
    return v8;
};
f25();
