new Uint8Array(4096);
new Int32Array(5);
new Uint8Array(1373);
for (let i13 = 0; i13 < 7; i13++) {
    try {
    const t0 = -3612;
    t0(i13, 4096, 4096, i13);
    } catch (e) {}
    const v21 = Symbol.iterator;
    const o30 = {
        [v21]() {
            let v23 = 10;
            const o29 = {
                next() {
                    v23--;
                    const v27 = v23 == 0;
                    const o28 = {
                        "done": v27,
                        "value": v23,
                    };
                    return o28;
                },
            };
            return o29;
        },
    };
}
