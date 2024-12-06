function f3(a4) {
    const o5 = {
        __proto__: a4,
        268435440: a4,
        ...a4,
        "e": 128,
        "a": -8,
        [268435456]: a4,
        880: 128,
        ...a4,
        "c": a4,
        "d": 128,
        "h": -8,
    };
    return o5;
}
f3(f3);
let v7 = f3(128);
const v8 = f3(268435456);
new Float32Array(7);
new BigUint64Array(3268);
new BigUint64Array(1);
v7 %= v8;
const v19 = Symbol.iterator;
const o28 = {
    [v19]() {
        let v21 = 10;
        const o27 = {
            next() {
                v21--;
                const v25 = v21 == 0;
                const o26 = {
                    "done": v25,
                    "value": v21,
                };
                return o26;
            },
        };
        return o27;
    },
};
