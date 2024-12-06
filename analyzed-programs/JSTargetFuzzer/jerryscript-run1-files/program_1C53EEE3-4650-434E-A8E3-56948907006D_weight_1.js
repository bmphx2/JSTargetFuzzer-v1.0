function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 65536;
}
new F0();
const v4 = new F0();
new F0(v4, v4);
new Uint8ClampedArray(492);
new Int16Array(2);
new Int8Array(129);
typeof -268435456n;
