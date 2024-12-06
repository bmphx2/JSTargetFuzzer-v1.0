function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a9;
    this.c = a9;
    this.f = -2n;
}
new F6(-65536n, -2n);
new F6(4294967297n, -65536n);
new F6(-2n, -65536n);
new BigInt64Array(1);
new BigUint64Array(16);
const o26 = {
};
new Proxy(Int32Array, o26);
new WeakMap();
Array().forEach;
new Uint16Array(84);
new Float32Array(4096);
new Uint16Array(4096);
const v45 = new Uint16Array(10);
v45[30];
