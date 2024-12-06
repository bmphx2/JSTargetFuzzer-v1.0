const v6 = Symbol.iterator;
const o15 = {
    [v6]() {
        let v8 = 10;
        const o14 = {
            next() {
                v8--;
                const v12 = v8 == 0;
                const o13 = {
                    "done": v12,
                    "value": v8,
                };
                return o13;
            },
        };
        return o14;
    },
};
for (let [i27, i28] = (() => {
        new Uint8Array();
        return [0, 10];
    })();
    (() => {
        const v29 = i27 < i28;
        const v32 = new BigUint64Array(16);
        v32.copyWithin();
        let v34 = 1n;
        v34 %= 2147483648n;
        return v29;
    })();
    i27++) {
}
