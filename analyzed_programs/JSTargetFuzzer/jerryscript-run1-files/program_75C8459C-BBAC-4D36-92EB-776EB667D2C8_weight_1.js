function f3() {
    return -9007199254740991n;
}
new Uint8ClampedArray(3025);
new Uint8Array(139);
new Uint8Array(218);
f3();
const v18 = Symbol.iterator;
const o27 = {
    [v18]() {
        let v20 = 10;
        const o26 = {
            next() {
                v20--;
                const v24 = v20 == 0;
                const o25 = {
                    "done": v24,
                    "value": v20,
                };
                return o25;
            },
        };
        return o26;
    },
};
