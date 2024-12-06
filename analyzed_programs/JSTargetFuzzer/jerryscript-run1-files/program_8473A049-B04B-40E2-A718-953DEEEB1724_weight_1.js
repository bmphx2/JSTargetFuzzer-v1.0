function f4() {
    return 4096n;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a7;
    this.h = a7;
}
new F5(268435456n, F5, 268435456n, f4, 901400899n);
new F5(F5, F5, F5);
const v11 = new F5(undefined, 4096n);
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.split = 2;
}
const v19 = new F16(v11, -582215760, 901400899n);
const o21 = {
    ...v19,
    get c() {
        return this;
    },
};
