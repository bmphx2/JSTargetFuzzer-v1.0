function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1073741824;
    this.d = 1073741824;
    this.f = 1073741824;
}
new F0();
new F0();
new F0();
new Float64Array(1931);
new Uint32Array(10);
new Int32Array(4);
const o22 = {
    ...this,
};
