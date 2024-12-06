function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a10;
}
new F6(-63902n, -63902n, -7n);
new F6(-7n, -9223372036854775807n, F6);
new F6(-7n, -63902n, 127);
new Uint8ClampedArray(("3").matchAll("-15"));
