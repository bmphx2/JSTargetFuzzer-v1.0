function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -9223372036854775808;
    this.f = -9223372036854775808;
    this.h = -9223372036854775808;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
new Map();
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a11;
    this.d = v3;
    this.g = Map;
}
new F8(v3, Map, F8);
const v14 = new F8(v5, v4, v3);
const v15 = new F8(v5, v5, v4);
class C16 extends F0 {
    static toString(a18, a19) {
        ++v5 in a18;
        super.f;
        [-2.9837868464429773,-640.1567025577294,-3.0,-1000.0,-0.0,2.220446049250313e-16,799479.3012092996,5.0,-1e-15,1e-15];
        [714182.0575398824,-7.0830297837370875,-5.0,-1.0];
        return [0.35553141999869964,0.5479085640626381];
    }
    constructor(a27, a28, a29, a30) {
        super();
        super.g = a28;
        try { a30(a27, F0, v3, this); } catch (e) {}
    }
    c;
    static m(a33, a34, a35, a36) {
        function f37(a38, a39) {
            const o45 = {
                "b": a35,
                "d": a36,
                n(a41, a42, a43, a44) {
                    a43[a44] = v15;
                    a43[196] = a41;
                    return f37;
                },
            };
            return o45;
        }
        f37(v14, a36);
        f37(a33, a35);
        f37(v14, a36);
        return v5;
    }
}
new C16();
new C16();
new C16();
function f52() {
    return v14;
}
Date.UTC(-3.0);
