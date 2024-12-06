const v1 = new WeakMap();
function f5(a6) {
    const o7 = {
        "b": v1,
        "e": a6,
        [a6]: a6,
        [-51668]: a6,
        "f": WeakMap,
        ...v1,
        "h": v1,
        ...a6,
        __proto__: v1,
        "d": a6,
        "a": 268435456,
    };
    return o7;
}
const v8 = f5(-51668);
const v9 = f5(-1073741824);
const v10 = f5(-1073741824);
class C11 extends f5 {
    [v1] = v8;
    constructor(a13, a14, a15) {
        super(-51668);
        function F16(a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a18;
            this.d = v10;
            this.a = this;
        }
        new F16(268435456, v8, a15);
        new F16(a15, v8, -1073741824);
        new F16(268435456, a14, a15);
    }
}
new C11(v9, v1, 268435456);
new C11(v8, v10, -1073741824);
new C11(v9, v8, -51668);
const v27 = [-2.0,-1.601440531771923e+308,-1.0,-3.077642219695236e+307,1.0];
const v28 = [5.0];
with (v27) {
    length = v28;
}
