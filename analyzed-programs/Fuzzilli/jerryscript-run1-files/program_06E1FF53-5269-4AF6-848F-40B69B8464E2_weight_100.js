class C3 {
    constructor(a5, a6) {
        try { a6(a5, -440464623); } catch (e) {}
        this.__proto__ = this;
    }
    static #g = -4426;
    static {
        const o11 = {
            "maxByteLength": 2838,
        };
        const v13 = new SharedArrayBuffer(2070, o11);
        new DataView(v13);
    }
}
const v16 = new C3(-440464623, -440464623);
new C3(257, -4426);
new C3(-440464623, -440464623);
const v21 = new Int16Array(5);
const v24 = new Int32Array(88);
const v27 = new BigInt64Array(121);
v27["toLocaleString"](v16, ..."toLocaleString", ...v27, ...v21);
const v34 = Symbol.toPrimitive;
const o37 = {
    [v34]() {
        try { v16.map(v24, 129); } catch (e) {}
        return 2147483649;
    },
};
