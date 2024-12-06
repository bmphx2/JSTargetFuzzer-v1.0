let v1 = -149061044;
class C3 {
    constructor(a5, a6) {
        const v7 = 0.9249295752332023;
    }
    set f(a13) {
        try { a13(0.9249295752332023, 0.9249295752332023, v1, v1); } catch (e) {}
        a13 == 0.9249295752332023;
        [] = a13;
    }
    3218;
    static 8 = 1000.0;
    [1000.0] = v1;
}
const v16 = new C3(1000.0, v1);
const v17 = new C3(0.9249295752332023, v1);
const v18 = new C3(v17, v1);
function f25(a26, a27, a28, a29) {
    const o46 = {
        __proto__: C3,
        "d": a26,
        set e(a31) {
            v18 && 9007199254740990;
            v18.length = 33;
            const v36 = Symbol.iterator;
            const o45 = {
                [v36]() {
                    let v38 = 10;
                    const o44 = {
                        next() {
                            v38--;
                            const v42 = v38 == 0;
                            const o43 = {
                                "done": v42,
                                "value": v38,
                            };
                            return o43;
                        },
                    };
                    return o44;
                },
            };
        },
    };
    return o46;
}
f25(9223372036854775807n, 9223372036854775807n, v16, 9007199254740990);
f25(717602365n, 9223372036854775807n, v18, 9007199254740990);
const v49 = f25(717602365n, 717602365n, v17, 9007199254740990);
f25(9223372036854775807n, 12728n, C3, 268435441);
v49[12728n];
const o55 = {
};
new Proxy(C3, o55);
v1 += -65535;
