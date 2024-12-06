function f0() {
    const o13 = {
        __proto__: -1.0822045414648127e+308,
        "f": 0.9671099256593115,
        valueOf(a5) {
            const o8 = {
                "maxByteLength": 10,
            };
            const v10 = new ArrayBuffer(8, o8);
            const v12 = new Int16Array(v10);
            return v12;
        },
        [-1.0822045414648127e+308]: -1.0822045414648127e+308,
    };
    return o13;
}
f0();
f0();
f0();
let v19 = -1;
new WeakMap();
class C26 {
    static get d() {
        const v29 = Symbol.iterator;
        const o38 = {
            [v29]() {
                const o37 = {
                    next() {
                        v19--;
                        const v35 = 10 == 0;
                        const o36 = {
                            "done": v35,
                            "value": 10,
                        };
                        return this;
                    },
                };
                return o37;
            },
        };
        return "string";
    }
}
new C26();
new C26();
new C26();
new BigInt64Array(1);
new BigUint64Array(16);
new Uint16Array(84);
new Float32Array(4096);
new Uint16Array(4096);
const v62 = new Uint16Array(10);
v62[30];
