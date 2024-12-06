function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 68364822;
}
new F0();
new F0();
new F0();
new Uint16Array(99);
new Float64Array(257);
new Float32Array(255);
class C18 extends Float32Array {
    static g;
    static [99] = Float64Array;
}
new C18();
new C18();
new C18();
