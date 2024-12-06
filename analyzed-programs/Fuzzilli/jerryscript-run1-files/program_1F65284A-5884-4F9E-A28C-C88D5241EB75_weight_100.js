const v1 = new WeakMap();
const v3 = new WeakSet();
function f4(a5, a6) {
    const o14 = {
        "a": a6,
        [v1](a8, a9, a10) {
            try { a6(v3, a10, WeakSet); } catch (e) {}
            try {
                super.any();
            } catch(e13) {
            }
            return a6;
        },
        __proto__: a5,
    };
    return o14;
}
const v15 = f4(WeakSet, WeakMap);
const v16 = f4(v1, v3);
f4(WeakSet, v1);
const v19 = new Set();
for (const v20 of v19) {
}
const o24 = {
    "f": WeakMap,
    "e": v1,
    [v19]: v16,
    "c": v15,
    "g": v3,
};
