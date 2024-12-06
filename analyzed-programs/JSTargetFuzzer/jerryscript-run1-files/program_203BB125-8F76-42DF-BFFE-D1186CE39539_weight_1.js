function f0() {
    class C3 {
    }
    const v4 = C3.__proto__;
    try { new v4(); } catch (e) {}
    const o21 = {
        __proto__: "abs",
        536870912: "abs",
        p(a8) {
            const v11 = Symbol.iterator;
            const o20 = {
                [v11]() {
                    let v13 = 10;
                    const o19 = {
                        next() {
                            v13--;
                            const v17 = v13 == 128;
                            const o18 = {
                                "done": v17,
                                "value": v13,
                            };
                            return o18;
                        },
                    };
                    return o19;
                },
            };
            return a8;
        },
    };
    return o21;
}
f0();
const v23 = f0();
f0();
const v27 = new Int16Array(4096);
new Int16Array(9);
new BigUint64Array(3, v23);
const o35 = {
};
new Proxy(BigUint64Array, o35);
v27.byteLength;
function f41() {
    return f41;
}
class C42 extends f41 {
    constructor(a44, a45, a46, a47) {
        super();
        return this;
    }
}
new C42();
