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
let v15 = new F9(f0, 1103951712n);
[F1,v5,v3,1103951712n];
const v17 = [536870889n,-2147483647n,v14,F1,F9,f0,v14,v5];
[F1,536870889n,v3,536870889n,536870889n,v17,v17];
let v23 = -375831.8476074161;
Math.cos(-2);
const v25 = --v15;
v23 % v15;
Math.cos(v23);
++v23;
-2 | v25;
const v30 = new BigInt64Array(512, BigInt64Array, 1103951712n, BigInt64Array);
const v33 = new Float64Array(16);
new Int8Array(15);
v33.c *= 16;
for (const v43 of v30) {
    new Float64Array(5);
    const v49 = new Float64Array(2);
    for (let i52 = 0; i52 < 4; i52++) {
        i52 = 16;
        function F58(a60, a61, a62, a63) {
            if (!new.target) { throw 'must be called with new'; }
            v43.d = a60;
            this.h = 5;
        }
        const v64 = new F58(v49, 2983, v43, 536870889n);
        new F58(F1, i52, Float64Array, 1103951712n);
        new F58(v64, 13, v43, 536870889n);
    }
    new Float32Array(2983);
}
