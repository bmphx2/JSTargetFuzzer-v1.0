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
        a21 in this;
        function f23(a24, a25, a26, a27) {
            try { a21(); } catch (e) {}
            return -1e-15;
        }
        f23(a21, this, v18, v16);
    }
    static [f6];
}
new C19();
const v34 = new C19();
new C19();
function F36(a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v34;
    this.b = a39;
    let v40 = 0;
    while (v40 < 9) {
        v40++;
    }
}
new F36(F0, v18);
new F36(v17, v18);
new F36(v17, v17);
for (const v51 of "preventExtensions") {
    break;
}
