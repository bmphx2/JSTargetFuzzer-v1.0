function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a9;
    this.c = a9;
    this.b = a9;
}
const v11 = new F6(10, 10, 10n);
new F6(10, 2147483649, 564n, v11, 10, 10);
new F6(-35304n, 10, -35304n);
new Int32Array(4);
new Uint32Array(3, v11, -35304n, 3);
new Float32Array(10);
const v25 = new ArrayBuffer(ArrayBuffer, Array);
Array(v25);
