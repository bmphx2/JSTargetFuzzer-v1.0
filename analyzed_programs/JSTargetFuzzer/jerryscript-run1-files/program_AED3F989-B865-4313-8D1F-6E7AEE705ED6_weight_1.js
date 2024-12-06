-9n >> 268435456n;
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
}
new F6(-2147483648);
new F6(-62733);
new F6(-65535);
const v16 = (10).toString;
try { v16(); } catch (e) {}
