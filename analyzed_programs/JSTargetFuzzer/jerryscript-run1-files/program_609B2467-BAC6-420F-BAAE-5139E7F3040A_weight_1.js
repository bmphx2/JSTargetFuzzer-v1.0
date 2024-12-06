const v2 = new Array(4);
function f3() {
    const v5 = Symbol.toPrimitive;
    const o8 = {
        [v5]() {
            try { f3(...4, ...v2, Symbol, this, ...v2, ...f3); } catch (e) {}
            super.a = this;
            return 4;
        },
    };
    const o9 = {
        __proto__: Array,
        [v5]: 4,
        "h": o8,
        "c": v5,
        "f": Symbol,
        "e": v5,
    };
    return v2;
}
new BigInt64Array(9);
new Uint16Array(803);
new Int8Array(2937);
const v22 = [];
const o24 = {
    __proto__: null,
};
const o27 = {
    get f() {
        super.e = "v";
        return this;
    },
};
[v22];
v2.includes();
