function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = this;
}
const v3 = new F0();
new F0();
const v5 = new F0();
[[v3,v3]];
[F0,v5,F0];
new Uint8ClampedArray(1);
new Int16Array(1500);
new Int32Array(16);
const v23 = new Array(0);
const v26 = new BigUint64Array(256);
const v29 = new Uint8ClampedArray(702);
new Int32Array(2);
if (268435439) {
    2 instanceof Array;
    let v34;
    try { v34 = v26.set(v29); } catch (e) {}
    v23[BigInt64Array] = v34;
} else {
    const v37 = new Uint8Array(3984);
    new v37(16);
    new Uint8Array(0);
}
