const v1 = new Date();
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a10;
    this.h = 268435441;
}
new F8(-1e-15, -1.7976931348623157e+308, 268435441, 255);
new F8(-1.7976931348623157e+308, v1, 255, 255);
const v16 = new F8(-1e-15, 1000000.0, 268435441, 268435441);
Object.defineProperty(v16, "c", { value: "string" });
const o20 = {
};
const v22 = new Proxy(F8, o20);
const o27 = {
    valueOf() {
        new v22(v22, this, this, this, 255);
        Date(7);
        return 1000000.0;
    },
};
