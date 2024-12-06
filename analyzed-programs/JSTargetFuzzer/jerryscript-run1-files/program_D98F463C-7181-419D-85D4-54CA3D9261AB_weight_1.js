function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 10;
    this.g = 10;
    this.c = 10;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f6(a7) {
    const o10 = {
        79: F0,
        __proto__: v3,
        valueOf(a9) {
            a9[F0] = a9;
            return F0;
        },
        ...a7,
        "d": a7,
        "b": v5,
        2150967658: a7,
    };
    return o10;
}
f6(v3, F0, v3, f6(v3));
f6(v3);
new Float64Array(10, v3);
new BigInt64Array(643);
new Int32Array(183, Int32Array);
const v24 = new Date();
v24.getYear();
