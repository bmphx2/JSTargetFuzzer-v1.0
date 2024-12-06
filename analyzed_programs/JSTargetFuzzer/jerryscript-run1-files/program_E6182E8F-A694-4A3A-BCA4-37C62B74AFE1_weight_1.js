function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1024;
    this.e = 1024;
    this.d = 1024;
}
new F0();
new F0();
new F0(F0);
function f6() {
    return F0;
}
new Uint32Array(128);
new Int32Array(127);
new Uint8ClampedArray(7);
const v18 = new BigInt64Array(14, Int32Array);
for (const v19 of v18) {
    async function f21(a22, a23) {
        await -1;
        return a22;
    }
    f21();
}
