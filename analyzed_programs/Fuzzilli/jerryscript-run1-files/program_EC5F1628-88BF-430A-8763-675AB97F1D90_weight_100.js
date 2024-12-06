function f0() {
}
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a12;
    this.e = f0;
    this.c = a12;
}
const v13 = new F7(1000, -536870912, 128, 2147483647);
const v14 = new F7(1000, -536870912, v13, v13);
const v15 = new F7(2147483647, 2147483647, 2147483647, 128);
const v20 = Symbol.toPrimitive;
const o25 = {
    [v20]() {
        v14 ** this;
        try { v15["m"]("m", -536870912, "m", -2147483649, "m"); } catch (e) {}
        return 1000;
    },
};
