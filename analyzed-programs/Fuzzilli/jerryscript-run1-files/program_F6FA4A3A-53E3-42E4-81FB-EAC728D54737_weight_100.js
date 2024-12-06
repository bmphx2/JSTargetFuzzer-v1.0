const v1 = new Set();
const v4 = new BigInt64Array(v1);
const v7 = new Int16Array(5);
const v10 = new Uint16Array(413);
const v11 = [v10];
try { v11(Int16Array, Uint16Array); } catch (e) {}
const v16 = v7 === 413;
const v17 = [v11,v10,v10,v10,Set];
const v18 = [BigInt64Array,Uint16Array];
const o22 = {
    7: BigInt64Array,
    [v7]: v4,
    get d() {
        Object.defineProperty(this, this, { writable: true, configurable: true, enumerable: true, value: 256 });
        return v16;
    },
    __proto__: "-13",
    "e": v18,
    "g": 413,
    "f": v1,
    "a": v17,
    "h": v10,
    [v10]: Uint16Array,
    65537: v17,
    "b": v7,
    set prototype(a21) {
    },
};
