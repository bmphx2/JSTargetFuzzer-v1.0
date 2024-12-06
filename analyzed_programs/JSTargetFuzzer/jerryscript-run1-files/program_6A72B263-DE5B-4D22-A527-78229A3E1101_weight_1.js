function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -14;
    this.f = -14;
    this.b = -14;
}
new F0();
new F0();
new F0();
new Float32Array(1345);
new BigInt64Array(1644);
new Float64Array(167);
-112059956n + 0n;
