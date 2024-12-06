new Float32Array(121);
new Uint32Array(255);
new BigInt64Array(255);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = BigInt64Array;
}
new F9(255, 255, 255, 255);
const v16 = new F9(121, 121, 255, 255);
new F9(255, 121, 255, 255);
v16 instanceof Float32Array;
