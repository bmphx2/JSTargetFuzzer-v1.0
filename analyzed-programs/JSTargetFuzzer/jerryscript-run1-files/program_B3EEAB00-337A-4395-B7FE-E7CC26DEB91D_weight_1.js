function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 6;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o15 = {
        61: v5,
        "f": v3,
        [v4](a10, a11, a12) {
            try {
                super.valueOf(this, a10, v5);
            } catch(e14) {
            }
            return a10;
        },
        "c": v3,
        "d": F0,
        [a7]: a7,
        [a8]: F0,
        ...a8,
    };
    return o15;
}
const v16 = f6(v3, v3);
const v17 = f6(v4, v3);
const v18 = f6(v3, v4);
class C19 {
    [v16] = f6;
    [v3];
    set b(a21) {
        [];
        const v25 = new Uint8Array(129);
        Math.cosh();
        Math.sinh();
        v25 >>> v25;
        Math.asin();
        a21 in this;
        function f32(a33, a34, a35, a36) {
            try { a21(); } catch (e) {}
            return -1e-15;
        }
        f32(a21, this, v18, v16);
    }
    static [f6];
}
new C19();
const v43 = new C19();
new C19();
function F45(a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v43;
    this.b = a48;
    let v49 = 0;
    while (v49 < 9) {
        v49++;
    }
}
new F45(F0, v18);
new F45(v17, v18);
new F45(v17, v17);
for (const v60 of "preventExtensions") {
    break;
}
