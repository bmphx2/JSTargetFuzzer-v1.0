class C3 {
    #a;
    static #f = 4294967297;
    static #h;
    static [4294967297];
    static [-4294967295];
    constructor(a5) {
        let v6 = 0;
        while (v6 < 1) {
            let {"a":v9,"c":v10,"f":v11,} = this;
            try { new v10(v11, 4294967297, v11, v10, v9); } catch (e) {}
            this.b ||= v9;
            v6++;
        }
    }
}
const v14 = new C3(-4294967295);
const v15 = new C3(4294967297);
const v16 = new C3(4294967297);
function f23(a24, a25, a26) {
    const o52 = {
        get d() {
            try {
                super.copyWithin(v14, a24, 10, this, v15);
            } catch(e29) {
            }
            return v16[5] % a25;
        },
        [-4294967295](a33, a34, a35, a36) {
            this[a24];
            super.h = 56695;
            const v42 = Symbol.iterator;
            const o51 = {
                [v42]() {
                    let v44 = 10;
                    const o50 = {
                        next() {
                            v44--;
                            const v48 = v44 == 0;
                            const o49 = {
                                "done": v48,
                                "value": v44,
                            };
                            return o49;
                        },
                    };
                    return o50;
                },
            };
            return v16;
        },
    };
    return o52;
}
f23(-110573739, 3.0, -4294967295);
f23(4294967297, -1000000000.0, -9223372036854775807);
f23(-9223372036854775807, -1000000000.0, 10);
f23(56695, -1000000000.0, -9223372036854775807);
const v61 = Math.expm1(268435439);
-(-1.2752507286136204e+308);
Math.sinh(268435439);
f23(1000, v61, -9223372036854775807);
-9223372036854775807 * -712281.1747125585;
