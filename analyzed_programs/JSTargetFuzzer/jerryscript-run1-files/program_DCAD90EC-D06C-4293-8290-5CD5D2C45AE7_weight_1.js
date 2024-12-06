function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -2147483648;
    this.c = -2147483648;
    let v4 = 9n;
    v4 -= 9223372036854775807n;
    const v6 = new Date();
    v6.setHours();
    this.h = -2147483648;
}
new F0();
new F0();
new F0();
[1.0];
[-3.0,2.220446049250313e-16,4.0,-5.0,0.36056657287043803,-3.0,8.924533154435547];
[-1.7976931348623157e+308,-Infinity,0.2181797933596079,-2.2250738585072014e-308,9.727618352615771];
new Int32Array(7);
new Float64Array(268);
new Float64Array(129);
const o30 = {
    [-1.0](a25) {
        for (let i = 0; i < 5; i++) {
            continue;
            break;
        }
    },
    "has": F0,
    get e() {
        function f27(a28, a29) {
            'use strict';
            a28.c = this;
            return a29;
        }
        return this;
    },
};
