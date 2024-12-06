const v2 = new Uint16Array(8);
const v5 = new Int8Array(8);
new BigUint64Array(0);
function f9(a10, a11, a12, a13) {
    const o23 = {
        __proto__: v2,
        set c(a15) {
        },
        "b": a12,
        get c() {
            this.__proto__ = this;
            return a12;
        },
    };
    return o23;
}
f9(f9(v5, 8, 8, 8), 0, 8, 8);
f9(v5, 8, 8, 8);
RangeError();
