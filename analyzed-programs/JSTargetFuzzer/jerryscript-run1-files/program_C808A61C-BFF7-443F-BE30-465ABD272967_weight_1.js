function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a10;
    this.g = a8;
}
new F6(-4294967296, -2147483648, -4294967296, -2147483648);
new F6(-2147483648, -65536, 10000, -4294967296);
new F6(-65536, -4294967296, -65536, 17249);
const v17 = new Int32Array(512);
for (const v18 of v17) {
    const v21 = new ArrayBuffer(10);
    new Int8Array(v21);
}
