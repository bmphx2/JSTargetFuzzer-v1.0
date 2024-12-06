function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 268435456;
    this.g = 268435456;
    this.c = 268435456;
}
new F0();
const v4 = new F0();
const v5 = new F0();
class C9 extends F0 {
    constructor(a11, a12, a13, a14) {
        super();
        new Uint8Array(11);
        new Float64Array(129);
        new Uint8ClampedArray(16);
    }
    static #a;
    g = -3n;
}
const v24 = new C9(v4, v4, v4, -2147483649n);
const v25 = new C9(v24, v5, v24, -3n);
const v26 = new C9(v24, v24, -3n, -2147483649n);
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a29;
    this.f = -9223372036854775808n;
}
const v31 = new F27(-2147483649n, -9223372036854775808n);
new F27(v25, -9223372036854775808n);
new F27(-3n, -3n);
const o34 = {
    2886300363: v24,
    ...v31,
    [v31]: v4,
    "f": -2147483649n,
};
(-5 & v26) || -144.73666415769367;
~-11;
