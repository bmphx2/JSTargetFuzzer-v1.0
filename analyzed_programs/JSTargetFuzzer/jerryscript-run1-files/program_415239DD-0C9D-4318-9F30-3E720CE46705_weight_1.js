function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 5;
    this.e = 5;
    this.g = 5;
}
new F0();
new F0();
new F0();
new Int32Array(1024);
new Int16Array(12);
new Uint8Array(7);
try { Set(Set); } catch (e) {}
