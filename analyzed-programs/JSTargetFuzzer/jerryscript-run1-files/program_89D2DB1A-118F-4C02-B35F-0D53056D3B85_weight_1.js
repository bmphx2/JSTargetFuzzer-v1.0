[];
const v6 = new Int8Array(6);
for (const v9 in v6) {
    Symbol.iterator;
    const o20 = {
        [1629875382n]() {
            let v13 = 10;
            const o19 = {
                next() {
                    v13--;
                    const v17 = v13 == 0;
                    const o18 = {
                        "done": v17,
                        "value": v13,
                    };
                    return o18;
                },
            };
            return o19;
        },
    };
}
new Uint16Array(4);
new BigInt64Array(3063);
try { Array.from(); } catch (e) {}
