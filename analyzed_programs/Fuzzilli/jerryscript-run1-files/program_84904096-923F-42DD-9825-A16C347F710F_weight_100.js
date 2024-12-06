class C3 {
    constructor(a5, a6) {
        const v7 = super.e;
        v7 - 2147483647;
        super.g;
        super.b = "iTDXV";
        v7?.[v7];
    }
    static #a;
    static #c;
    #e = 1024;
    static [-1];
}
const v11 = new C3(2147483647, "iTDXV");
const v12 = new C3(2147483647, v11);
new C3(2147483647, 2147483647);
function f14(a15, a16) {
    const o33 = {
        4: "iTDXV",
        "g": C3,
        [a16](a18, a19, a20, a21) {
            a20 **= C3;
            const v23 = Symbol.iterator;
            const o32 = {
                [v23]() {
                    let v25 = 10;
                    const o31 = {
                        next() {
                            v25--;
                            const v29 = v25 == 0;
                            const o30 = {
                                "done": v29,
                                "value": v25,
                            };
                            return o30;
                        },
                    };
                    return o31;
                },
            };
            return a21;
        },
    };
    return o33;
}
f14(v11, v12);
const v35 = f14(C3, "iTDXV");
const v36 = f14(v11, 1024);
function f37(a38, a39, a40) {
    a38 |= a39;
    return a40;
}
f37(v36, v35, v11);
new Uint8Array(877);
new BigInt64Array(6);
new Uint16Array(16);
