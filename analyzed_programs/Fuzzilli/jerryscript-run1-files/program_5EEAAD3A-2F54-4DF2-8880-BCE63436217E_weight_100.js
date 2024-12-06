function F0() {
    if (!new.target) { throw 'must be called with new'; }
    let v1 = this;
    v1.g = 2147483649;
    v1.b = 2147483649;
    delete v1[F0];
    v1[8] ^= 2147483649;
    const v7 = v1++;
    Math.log1p(v1);
    v7 ** -655226.1762178629;
    65537 + 65537;
    Math.tanh(v1);
    Math.log1p(v7);
    !v7;
    v1.d = 2147483649;
}
const v14 = new F0();
const v15 = new F0();
const v16 = new F0();
function f23(a24, a25, a26) {
    const o34 = {
        "h": a26,
        "f": F0,
        [a26](a28, a29) {
            let v31;
            try { v31 = a28["copyWithin"](v16); } catch (e) {}
            try { v31["n"](a25); } catch (e) {}
            return 65535;
        },
        __proto__: v14,
        [9]: a24,
        [v14]: 65535,
        [-2]: -256,
    };
    return a26;
}
f23(v15, -256, 65535);
f23(v14, 9, 1073741824);
f23(v16, 1073741824, 9);
for (let i40 = 0, i41 = 9;
    i40 < i41;
    (() => {
        i40++;
        class C47 {
            0 = -1;
            valueOf(a49, a50, a51, a52) {
                function F53(a55, a56, a57, a58) {
                    if (!new.target) { throw 'must be called with new'; }
                    this.f = a52;
                }
            }
        }
    })()) {
}
