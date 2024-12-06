function f0() {
    const o18 = {
        __proto__: "abs",
        536870912: "abs",
        p(a5) {
            const v8 = Symbol.iterator;
            const o17 = {
                [v8]() {
                    let v10 = 10;
                    const o16 = {
                        next() {
                            v10--;
                            const v14 = v10 == 128;
                            const o15 = {
                                "done": v14,
                                "value": v10,
                            };
                            return o15;
                        },
                    };
                    return o16;
                },
            };
            return a5;
        },
    };
    return o18;
}
f0();
const v20 = f0();
f0();
new Int16Array(4096);
new Int16Array(9);
new BigUint64Array(3, v20);
function f34() {
    return f34;
}
class C35 extends f34 {
    constructor(a37, a38, a39, a40) {
        super();
        return this;
    }
}
new C35();
