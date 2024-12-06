const o14 = {
    valueOf(a7) {
        for (const v8 in this) {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F9(v8, a7);
        }
        return this;
    },
};
try { o14.valueOf(); } catch (e) {}
const v17 = new WeakMap();
new Map();
function f20(a21, a22, a23) {
    const o24 = {
        __proto__: "toString",
        "d": "toString",
        "f": a21,
        4: "f1n5c",
        "e": a23,
        "c": v17,
        ...a23,
        "h": Map,
        "a": "undefined",
        "b": "toString",
        "g": v17,
        1073741825: a22,
    };
    return o24;
}
f20("undefined", 9, "f1n5c");
f20("toString", 1073741824, "f1n5c");
f20("toString", 9, "f1n5c");
const v29 = new Float32Array(Float32Array, Float32Array, Float32Array);
Reflect.has(v29.sort);
