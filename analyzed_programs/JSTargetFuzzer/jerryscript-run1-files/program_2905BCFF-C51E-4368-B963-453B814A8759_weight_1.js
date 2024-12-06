const v1 = new WeakMap();
function f2(a3) {
    const o10 = {
        "c": a3,
        ...a3,
        [a3]: v1,
        ...v1,
        __proto__: v1,
        [v1](a5, a6) {
            super.h = this;
            return this[Symbol.isConcatSpreadable];
        },
    };
    return o10;
}
f2(WeakMap);
f2(f2(WeakMap));
new Int32Array(Int32Array);
new Int16Array(8);
new Int32Array(1);
Math.max();
