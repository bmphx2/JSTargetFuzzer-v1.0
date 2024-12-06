function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 129;
    this.h = 129;
    this.g = 129;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F0;
    this.b = a14;
}
const v15 = new F9(v5, v3, 5.0, v5);
new F9(v4, v4, 5.0, v3);
const v17 = new F9(v4, v4, 1000000000.0, v5);
function f18(a19, a20, a21) {
    const o31 = {
        set d(a23) {
            this[this];
            a19[v5] %= 1000000000.0;
            const v27 = ~v4;
            ~v4;
            -(-4294967297);
            Math.trunc(v27);
        },
        "h": 2.0,
        "d": F9,
    };
    return o31;
}
const v32 = f18(v15, v15, 5.0);
f18(v15, v15, 1000000000.0);
f18(v17, v15, 2.0);
Object.defineProperty(v32, Number instanceof F0, { value: v17 });
const o39 = {
    "maxByteLength": 3254,
};
const v41 = new ArrayBuffer(3254, o39);
new Int8Array(v41);
