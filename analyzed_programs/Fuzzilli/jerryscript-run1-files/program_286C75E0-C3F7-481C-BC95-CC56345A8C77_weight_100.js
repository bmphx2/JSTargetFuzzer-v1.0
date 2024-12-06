function f0() {
    const o13 = {
        __proto__: "reduce",
        p(a5) {
            let v6 = 0;
            do {
                v6++;
            } while (v6 < 4)
            return this;
        },
    };
    return o13;
}
const v14 = f0();
const v15 = f0();
const v16 = f0();
class C17 extends f0 {
    static b = v14;
    constructor(a19) {
        super();
        const v20 = this[104];
        let v21 = v15[v20];
        v21 >>>= a19;
        Object.defineProperty(this, v20, { configurable: true, enumerable: true, get: f0 });
    }
    e;
    static [v16];
    c;
    static #h = v16;
}
const v22 = new C17(C17);
const v23 = new C17(v22);
const v24 = new C17(v23);
const v31 = ~-9.655541867982018;
v14 | v31;
v24 ** v31;
const o36 = {
    "maxByteLength": 4060,
};
const v38 = new ArrayBuffer(251, o36);
new Float64Array(v38);
