function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -57048;
    this.f = -57048;
    this.g = -57048;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o21 = {
        [v4]: a7,
        m(a9, a10) {
            try { a10.setMinutes(this, v5); } catch (e) {}
            a10 <<= this;
            const v12 = a9 % a7;
            const v16 = new Set();
            const v18 = v16.__proto__;
            try { Date["UTC"](-9007199254740990, -65536, ..."UTC", ...v18); } catch (e) {}
            return v12;
        },
        "c": a7,
        [F0]: a7,
        __proto__: v4,
        [a7]: v3,
    };
    return o21;
}
const v22 = f6(v5);
const v23 = f6(v5);
f6(v4);
function F25(a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a27;
    this.h = v5;
}
const v30 = new F25(f6, v5, v22);
new F25(v30, v5, v22);
new F25(v5, v3, v23);
class C34 {
    constructor(a36, a37) {
        ("4294967297").replaceAll(a37, a36);
    }
}
new C34(C34);
