function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.f = f0;
}
const v3 = new F1(F1);
new F1();
const v5 = new F1();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.growable = a11;
}
new F9(f0, f0);
const v14 = new F9(-2147483647n, F1);
new F9(f0, 1103951712n);
[F1,v5,v3,1103951712n];
const v17 = [536870889n,-2147483647n,v14,F1,F9,f0,v14,v5];
[F1,536870889n,v3,536870889n,536870889n,v17,v17];
const v21 = new BigInt64Array(512, BigInt64Array, 1103951712n, BigInt64Array);
const v24 = new Float64Array(16);
new Int8Array(15);
v24.c *= 16;
for (const v34 of v21) {
    new Float64Array(5);
    new Float64Array(2);
    new Float32Array(2983);
}
