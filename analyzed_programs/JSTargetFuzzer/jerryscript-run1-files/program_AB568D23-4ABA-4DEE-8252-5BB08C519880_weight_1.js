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
    i27 < i28;
    i27++) {
}
