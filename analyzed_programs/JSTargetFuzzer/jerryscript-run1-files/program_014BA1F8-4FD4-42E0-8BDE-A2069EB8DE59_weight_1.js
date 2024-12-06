function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 8;
    this.h = 8;
}
const v3 = new F0(F0, F0);
const v4 = new F0();
const v5 = new F0();
const o9 = {
};
const v11 = new Proxy(v5, o9);
Object.defineProperty(v5, v5, { enumerable: true, value: v11 });
function f12(a13, a14, a15, a16) {
    const o31 = {
        "d": 18397,
        set dotAll(a18) {
            a13 >> this;
            this[o9] = 18397;
            [0.9700101649714843,3.0,0.0,-374532.1565119135];
            [-1.7216925712502459e+308,-537.8795857575362,-1000.0];
            [-4.0,-2.689676373010739];
            Array["of"](0.0, 203);
        },
        __proto__: v4,
        ...v5,
        "d": 993433228,
        "e": a15,
    };
    return o31;
}
f12(18397, v4, v3, 18397);
f12(40875, v4, v3, 40875);
f12(993433228, v5, v5, 40875);
1073741824n * 268435456n;
