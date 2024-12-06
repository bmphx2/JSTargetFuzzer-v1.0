function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9007199254740992;
    this.e = 9007199254740992;
    this.g = 9007199254740992;
}
new F0();
new F0();
new F0();
new Float32Array(16);
new Uint8Array(3472);
new Int32Array(10);
([]).splice(0, [79.16904989227191,2.2250738585072014e-308], 0);
