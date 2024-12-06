const v2 = new BigUint64Array(4096);
const v5 = new Uint16Array(1972);
const v8 = new Int16Array(15, 15);
function f9(a10, a11) {
    const o17 = {
        "b": a10,
        __proto__: v8,
        "e": a11,
        ...v8,
        "g": a11,
        get split() {
            class C13 extends Int16Array {
                e;
            }
            new C13();
            const v15 = new C13();
            new C13(v15, a11, this);
            return Uint16Array;
        },
    };
    return o17;
}
f9(1972, 4096, v8, v5, Uint16Array, Int16Array, v2, f9);
f9(4096, 4096);
f9(15, 4096);
const v22 = ([]).values();
v22 >= v22;
