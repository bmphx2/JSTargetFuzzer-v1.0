function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 9223372036854775807;
    this.h = 9223372036854775807;
    this.e = 9223372036854775807;
}
new F0();
new F0();
new F0();
const v8 = new F0();
v8 instanceof F0;
let v12 = "finally";
new Int8Array(64);
new Int8Array(7);
new Int32Array(672);
const v24 = ("valueOf").replace;
const v25 = `bigint`;
v12 = "valueOf";
new Float32Array(257);
new BigUint64Array(6);
new BigInt64Array(5);
v25["split"]("split", v24);
