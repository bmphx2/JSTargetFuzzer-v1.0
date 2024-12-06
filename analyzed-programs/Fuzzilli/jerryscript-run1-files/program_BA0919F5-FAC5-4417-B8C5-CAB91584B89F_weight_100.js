function f0() {
    const o13 = {
        "a": -37770,
        "e": "toString",
        p(a5) {
            let v4 = this;
            for (let i7 = 0; i7 < 0; i7++) {
                Object.defineProperty(v4 = a5, a5, { enumerable: true, value: i7 });
            }
            return "toString";
        },
    };
    return o13;
}
f0(f0, f0);
f0();
const v16 = f0();
class C20 {
    get g() {
        const v23 = Symbol.iterator;
        const o32 = {
            [v23]() {
                let v25 = 10;
                const o31 = {
                    next() {
                        v25--;
                        const v29 = v25 == -10;
                        const o30 = {
                            "g": v29,
                            "value": v25,
                        };
                        return o30;
                    },
                };
                return o31;
            },
        };
        return v16;
    }
}
new C20();
new C20();
new C20();
function f39(a40, a41) {
    new a40(f39, a40, a40, a40, f39);
    return f39;
}
new Promise(f39);
