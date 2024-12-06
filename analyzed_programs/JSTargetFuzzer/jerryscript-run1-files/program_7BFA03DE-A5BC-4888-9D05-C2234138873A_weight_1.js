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
const v24 = new Int16Array(4096);
new Int16Array(9);
new BigUint64Array(3, v20);
const o32 = {
};
new Proxy(BigUint64Array, o32);
v24.byteLength;
function f38() {
    return f38;
}
class C39 extends f38 {
    constructor(a41, a42, a43, a44) {
        super();
        return this;
    }
}
new C39();
