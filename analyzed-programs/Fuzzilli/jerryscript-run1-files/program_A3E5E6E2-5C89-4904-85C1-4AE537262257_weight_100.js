function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 4294967297;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
new Uint16Array(1000);
let v10 = Int8Array;
new v10(9);
new BigInt64Array(2100);
const v18 = --v10;
v3 = v4;
function f19(a20, a21, a22, a23) {
    const o24 = {
        "h": v18,
        "f": 2100,
        "c": a20,
    };
    return o24;
}
f19(v5, 268435439, 9, 268435439);
f19(v3, 2147483649, 9, 1000);
f19(v5, 1000, 268435439, 9);
