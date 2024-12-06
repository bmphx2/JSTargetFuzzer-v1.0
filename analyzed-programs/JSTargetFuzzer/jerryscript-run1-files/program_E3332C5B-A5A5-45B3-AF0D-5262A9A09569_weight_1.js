function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = this;
    this.d = 12;
    this.e = 12;
}
new F0();
new F0();
new F0();
new Uint32Array(257);
new Float64Array(16);
new Float32Array(5);
Array(160)["slice"]();
