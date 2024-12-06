function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 127;
    this.h = 127;
    this.b = 127;
}
new F0();
new F0();
new F0();
new Uint16Array(611);
new Uint8Array(512);
new Int32Array(1024);
new Set();
new Int32Array(2916);
