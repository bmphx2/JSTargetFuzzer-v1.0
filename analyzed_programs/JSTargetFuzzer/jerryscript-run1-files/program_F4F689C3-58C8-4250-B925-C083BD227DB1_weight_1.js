function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -1073741824;
}
new F0();
new F0();
new F0();
new Uint32Array(8);
new Uint8ClampedArray(1653);
new BigInt64Array(64);
-9n >> 268435456n;
