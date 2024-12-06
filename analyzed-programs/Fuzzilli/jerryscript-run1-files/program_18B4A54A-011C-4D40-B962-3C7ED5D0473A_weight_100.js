function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 536870888;
}
const v3 = new F0();
new F0();
const v5 = new F0();
class C9 extends F0 {
    [v5] = v3;
    static {
        new Uint32Array(3276);
        new Uint16Array(77);
        new BigUint64Array(3926);
    }
    h;
}
const v20 = new C9();
const v21 = new C9();
const v22 = new C9();
function f23(a24, a25, a26, a27) {
    const o40 = {
        "e": v20,
        "a": "toString",
        n(a29, a30, a31, a32) {
            for (let i34 = 0; i34 < 9; i34++) {
                i34 = a30;
            }
            return a24;
        },
    };
    return o40;
}
const v41 = f23(v22, v22, "toString", "toString");
const v42 = f23(v20, v21, "setUTCMilliseconds", "2147483649");
let v43 = f23(v21, v21, "2147483649", "setUTCMilliseconds");
class C44 {
    toString(a46, a47) {
        v43 **= v41;
        const t37 = "setUTCMilliseconds";
        t37.h = v42;
        return a47;
    }
}
new C44();
new C44();
new C44();
