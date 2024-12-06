function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 7;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v9 = 15;
let v11 = 10000;
if (F0) {
    v3[F0] = 65535;
    v11 %= 2147483649;
} else {
    try {
    const t0 = 2147483649;
    t0(16, 16, 65535);
    } catch (e) {}
}
delete v5[-2];
v9 = 2147483649;
v4.b;
