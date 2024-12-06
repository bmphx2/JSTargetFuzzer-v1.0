const v2 = new Uint32Array(10);
new Float64Array(10);
const v8 = new Int32Array(2104);
function f9(a10, a11, a12, a13) {
    const o16 = {
        "h": a12,
        "e": Int32Array,
        ...v8,
        __proto__: v2,
        "b": 2104,
        get g() {
            return a13 + v8;
        },
        [10]: a13,
        10: v2,
    };
    return o16;
}
f9(2104, 2104, 2104, 10);
f9(2104, 10, 10, 10);
f9(2104, 2104, 10, 10);
f9(10, 10, 10, 2104);
try { v2.sort(f9); } catch (e) {}
const v23 = Symbol.iterator;
const o32 = {
    [v23]() {
        let v25 = 10;
        const o31 = {
            next() {
                v25--;
                const v29 = v25 == 0;
                const o30 = {
                    "done": v29,
                    "value": v25,
                };
                return o30;
            },
        };
        return o31;
    },
};
