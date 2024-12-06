function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1073741824;
}
new F0();
new F0();
new F0();
new BigInt64Array(234);
new Uint32Array(101);
new Int8Array(14);
const v20 = 2147483649 && -2147483649n;
v20 & v20;
