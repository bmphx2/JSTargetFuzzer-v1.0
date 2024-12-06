function f6() {
    return 64n;
}
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a11;
}
new F7(129n, 64n, 1242506137n);
new F7(1242506137n, -9007199254740990n, 255n);
new F7(129n, 1242506137n, -4096n);
let v18 = 409683548n;
let v19 = 41365n;
v18 *= -(v19--);
