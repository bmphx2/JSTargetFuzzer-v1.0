const v1 = new Date();
function f5() {
    return v1;
}
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
    this.e = a10;
    this.d = f5;
}
new F6(-1363071672, -2147483649, f5);
new F6(-1363071672, F6, f5);
new F6(-2147483649, -1363071672, v1);
const v17 = Promise.resolve();
v17.finally(v17);
9007199254740990 <= 65535;
