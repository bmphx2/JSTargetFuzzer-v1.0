function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
    this.d = a5;
}
const v6 = new F3(1.7176002864877936e+308);
new F3(NaN);
const v8 = new F3(v6);
function f9() {
    return v8;
}
new Uint8Array(7);
new BigInt64Array(57);
new Float32Array(2);
const v24 = new Map();
for (let v25 = 0; v25 < 5; v25++) {
    v24["set"](v25);
}
([[]]).flat();
new Float64Array(3658);
const v35 = [-4294967296,8,-2147483648,-9007199254740992,-12326];
function f38(a39, a40, a41, a42) {
    return arguments;
}
f38(Uint8ClampedArray, Uint8Array, v35, 199);
new BigInt64Array(3886);
