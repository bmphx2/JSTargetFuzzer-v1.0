function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 4294967297;
    this.b = 4294967297;
    this.a = 4294967297;
}
new F0();
new F0();
new F0();
try { Float32Array(); } catch (e) {}
