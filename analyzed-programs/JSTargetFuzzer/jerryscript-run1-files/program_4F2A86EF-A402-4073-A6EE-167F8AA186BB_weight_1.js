function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 8;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v5;
}
for (const v11 in v4) {
    function f12() {
        return v5;
    }
}
const v14 = new Int8Array(87);
const v17 = new Float64Array(8);
new BigInt64Array(2638);
const v22 = new Uint32Array();
const v25 = new BigInt64Array(BigInt64Array, BigInt64Array, BigInt64Array);
with (v25) {
    byteOffset = -9223372036854775807;
    Int8Array !== BigInt64Array;
    try { v14.findIndex(f6, v17); } catch (e) {}
}
v25.fill(-4294967295);
const v30 = 125563.20783278253 - v22;
const v31 = [1.7976931348623157e+308,-7.132348077024275,-55.152548489457104];
v31[65535n] = v30;
for (let v33 = 0; v33 < 5; v33++) {
    v31.splice(v33);
}
