function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -7;
}
new F0();
new F0();
new F0();
new Uint8Array(128);
new Uint8ClampedArray(1000);
new Uint8Array(6);
const v16 = [4,4,4,4,4];
4 / 0;
6 < v16[903];
