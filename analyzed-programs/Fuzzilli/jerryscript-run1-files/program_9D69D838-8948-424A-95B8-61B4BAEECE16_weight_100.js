let v3 = 896;
new Uint8ClampedArray(v3);
new Uint8ClampedArray(8);
const v11 = new Float32Array(10);
const o12 = {
    __proto__: v11,
    ...v11,
    "a": -255881103,
};
const v14 = Symbol.toPrimitive;
const o17 = {
    [v14]() {
        v3 = -2147483648;
        this.__proto__ = Symbol;
        Symbol(this);
        return v3;
    },
};
