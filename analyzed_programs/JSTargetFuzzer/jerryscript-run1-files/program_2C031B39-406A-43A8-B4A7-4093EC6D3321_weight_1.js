const v2 = new Uint8ClampedArray(2777);
switch (v2) {
    default:
        v2[2147483649];
        break;
}
new BigUint64Array(3);
const v9 = new Float64Array(512);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a12;
    this.d = a12;
}
new F10(3, 2777);
new F10(512, 2777);
const v16 = new F10(512, 512);
const v21 = new Uint8Array(Uint8Array, Uint8Array, Uint8Array);
const o22 = {
};
const v24 = new Proxy(v21, o22);
with (v24) {
    const t21 = 512;
    t21[0] = v9;
    const o25 = {
    };
    new Proxy(v16, o25);
    f = o22;
}
