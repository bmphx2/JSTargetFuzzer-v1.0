function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2147483649;
    this.b = 2147483649;
    this.d = 2147483649;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f12(a13, a14, a15) {
    const o23 = {
        "h": a15,
        "f": F0,
        [a15](a17, a18) {
            let v20;
            try { v20 = a17["copyWithin"](v5); } catch (e) {}
            try { v20["n"](a14); } catch (e) {}
            return 65535;
        },
        __proto__: v3,
        [9]: a13,
        [v3]: 65535,
        [-2]: -256,
    };
    return a15;
}
f12(v4, -256, 65535);
f12(v3, 9, 1073741824);
f12(v5, 1073741824, 9);
for (let i29 = 0, i30 = 9;
    i29 < i30;
    (() => {
        i29++;
        class C36 {
            0 = -1;
            valueOf(a38, a39, a40, a41) {
                function F42(a44, a45, a46, a47) {
                    if (!new.target) { throw 'must be called with new'; }
                    this.f = a41;
                }
            }
        }
    })()) {
}
