function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
    const v7 = [];
    function f8() {
        Object.defineProperty(v7, "d", { value: 1e-15 });
        return 1e-15;
    }
    f8();
    f8();
    this.d = 1592003298n;
}
new F3(1592003298n, -1024n);
new F3(536870887n, -1024n);
new F3(536870887n, 536870887n);
new BigUint64Array(1024);
new Uint8Array(512);
new Int32Array(9);
const o31 = {
    toString(a25, a26, a27, a28) {
        return SyntaxError();
    },
};
async function f32(a33, a34) {
    return 1073741823 >>> o31;
}
f32(f32, f32);
