function f3(a4, a5) {
    const o20 = {
        __proto__: 4294967296,
        "h": a4,
        ...a4,
        o(a7, a8) {
            const v10 = Symbol.iterator;
            const o19 = {
                [v10]() {
                    let v12 = 10;
                    const o18 = {
                        next() {
                            v12--;
                            const v16 = v12 == 0;
                            const o17 = {
                                "done": v16,
                                "value": v12,
                            };
                            return o17;
                        },
                    };
                    return o18;
                },
            };
            return a8;
        },
    };
    return o20;
}
const v21 = f3(255, 255);
const v22 = f3(255, -9223372036854775807);
f3(4294967296, 4294967296);
new Map();
class C26 {
    constructor(a28, a29, a30, a31) {
        const o32 = {
        };
        new Proxy(f3, o32);
        this[a30];
    }
    d = 255;
    b;
    static 5;
}
const v36 = new C26(f3, v21, v21, v21);
new C26(v36, v22, v21, v22);
new C26(v36, v21, v21, v21);
RegExp([-2,-536870912,-2910,-10]);
