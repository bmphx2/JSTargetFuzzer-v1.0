const v1 = new WeakMap();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = false;
}
new F4();
const v9 = new Int8Array(1000);
for (const v10 in v9) {
    const v12 = v10 * v10;
    v12 * (-7 & v12);
}
function f17(a18) {
    const o19 = {
        "b": v1,
        "e": a18,
        [a18]: a18,
        [-51668]: a18,
        "f": WeakMap,
        ...v1,
        "h": v1,
        ...a18,
        __proto__: v1,
        "d": a18,
        "a": 268435456,
    };
    return o19;
}
const v20 = f17(-51668);
const v21 = f17(-1073741824);
const v22 = f17(-1073741824);
class C23 extends f17 {
    [v1] = v20;
    constructor(a25, a26, a27) {
        super(-51668);
        function F28(a30, a31, a32) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a30;
            this.d = v22;
            this.a = this;
        }
        new F28(268435456, v20, a27);
        new F28(a27, v20, -1073741824);
        new F28(268435456, a26, a27);
    }
}
new C23(v21, v1, 268435456);
new C23(v20, v22, -1073741824);
new C23(v21, v20, -51668);
const v39 = [-2.0,-1.601440531771923e+308,-1.0,-3.077642219695236e+307,1.0];
const v40 = [5.0];
with (v39) {
    length = v40;
}
const v41 = f17(-51668);
const v42 = [];
function f43(a44) {
    return v42;
}
v42.map(f43);
[0.7856547130692503,2.220446049250313e-16,-2.2250738585072014e-308,884615.3416654742,-7.547868218041889e+307];
[4.0,1000000000000.0,0.7191955759013305,-329999.16497056093,-57.34331225699657,-8.423844269386];
[1000000000000.0,-Infinity,-1.0,1000000000.0,1.7976931348623157e+308,-3.7217406957453107,-1.3057270375709162,0.31108423763775217,-0.0,3.539585059681167e+307];
v41 >> -1073741824;
