const v2 = new Uint8ClampedArray(197);
const v5 = new BigInt64Array(145);
function f7(a8, a9, a10) {
    const v12 = [v5];
    const v13 = v2.set;
    Reflect.apply(v13, v5, v12);
    return v13;
}
f7(145, 255, 255);
const v17 = new Uint8ClampedArray(255);
const v19 = Symbol.toStringTag;
v17[v19] = v19;
f = v19;
new Int16Array(255);
const v25 = [];
const v27 = Symbol.iterator;
const o44 = {
    [v27]() {
        let v29 = 10;
        const o43 = {
            next() {
                v29--;
                const v33 = v29 == 0;
                const o42 = {
                    "done": v33,
                    "value": v29,
                    [v25](a35, a36, a37, a38) {
                        return v17;
                    },
                };
                return o42;
            },
        };
        return o43;
    },
};
new Object(3);
