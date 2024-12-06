function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 8;
}
new F0();
new F0();
const v5 = new F0();
function f6() {
    return v5;
}
new Int8Array(87);
new Float64Array(8);
new BigInt64Array(2638);
const v20 = new Uint32Array();
const v23 = new BigInt64Array(BigInt64Array, BigInt64Array, BigInt64Array);
v23.fill(-4294967295);
const v26 = 125563.20783278253 - v20;
const v27 = [1.7976931348623157e+308,-7.132348077024275,-55.152548489457104];
v27[65535n] = v26;
for (let v29 = 0; v29 < 5; v29++) {
    v27.splice(v29);
}
