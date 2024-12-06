function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -9007199254740990;
    this.c = -9007199254740990;
    this.d = -9007199254740990;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o20 = {
        set h(a9) {
            for (const v10 of v4) {
                new v10();
            }
            a7 ^ v4;
        },
        3730768047: v4,
        set c(a15) {
            try { v5["toDateString"](a15, F0, "toDateString", a15, "toDateString"); } catch (e) {}
            const v18 = a15 ^ a7;
            try { a7.p(F0, this, v18, a15); } catch (e) {}
        },
    };
    return o20;
}
const v21 = f6(v3, v4, v5, v5);
const v22 = f6(v4);
const v23 = f6(v4);
function f24(a25, a26, a27) {
    const o40 = {
        __proto__: v5,
        3: v3,
        3956: a26,
        set f(a29) {
            if (a29) {
                const v33 = --v4;
                a25.max(9);
                Math.max(1000.0, v21, 9 >>> v33);
                v3.cosh(a29);
            } else {
                f24 >> this;
                this ^ a27;
            }
        },
    };
    return o40;
}
f24(v4, v21, v21);
f24(v3, v21, v23);
f24(v4, v22, v21);
v4[[-0.0,2.2250738585072014e-308,5.0,1.207728181434696e+308,-5.0]];
