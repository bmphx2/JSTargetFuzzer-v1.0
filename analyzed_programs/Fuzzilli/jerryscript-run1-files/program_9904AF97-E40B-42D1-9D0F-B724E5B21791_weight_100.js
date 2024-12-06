function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    this.c = -65536;
    this.d = -65536;
}
new F3(-14);
const v7 = new F3(-32945);
new F3(-32945);
v7[4096];
new BigInt64Array(129);
new Float64Array(129);
new Int8Array(8);
