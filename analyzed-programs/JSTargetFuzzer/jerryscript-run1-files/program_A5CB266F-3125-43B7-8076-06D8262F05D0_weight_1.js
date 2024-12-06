function f0() {
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const t4 = 65536n;
    t4.c = a9;
    this.b = a10;
    f0--;
    new Int16Array(5);
    new Int32Array(256);
    new Float32Array(1);
    this.a = a9;
}
new F7(NaN, -9007199254740992n);
new F7(NaN, 0.23351541761792005);
new F7(NaN, F7);
new Int8Array(4);
new Int16Array(2);
new Uint16Array(3214);
const v34 = new BigUint64Array();
with (v34) {
    length.b = -61913n;
}
