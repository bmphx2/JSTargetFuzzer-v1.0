function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 37551078;
    this.a = 37551078;
    this.h = 37551078;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
v3[0] = v4;
const v6 = v5[16];
const v7 = delete v3[3688];
Object.defineProperty(v4, "h", { writable: true, enumerable: true, value: v3 });
const v8 = v5 << v5;
const v11 = new Uint32Array(3561);
const v14 = new BigUint64Array(5);
const v17 = new Uint8Array(3767);
const v20 = new Int32Array(1024);
const o50 = {
    p(a22, a23) {
        let v24;
        try {
        const t0 = 1024;
        v24 = t0(this, a23, a22, a23, v20);
        } catch (e) {}
        const v27 = ("object").charCodeAt;
        function f31() {
            return 64;
        }
        v17 << F0;
        const v34 = new Set();
        v34.size;
        typeof v24 === "object";
        Reflect.apply(v27, a23);
        v20[0] in v24;
        return Int32Array;
    },
    "f": v4,
    "c": v11,
    __proto__: v4,
    "d": v7,
    "h": BigUint64Array,
    "g": v14,
    5: v8,
    "g": v17,
    6: v8,
    toString(a43, a44, a45, a46) {
        const o47 = {
        };
        new Proxy(this, o47);
        return v6;
    },
    ...v5,
};
try { o50.p(Int32Array, v20); } catch (e) {}
