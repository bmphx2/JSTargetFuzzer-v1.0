new Uint8Array(3);
new Int16Array(3);
const v12 = new Float32Array(3);
v12[268435456];
let v14 = 10;
for (; v14--;) {
    const v17 = Symbol.iterator;
    const o26 = {
        [v17]() {
            let v19 = 10;
            const o25 = {
                next() {
                    v19--;
                    const v23 = v19 == 0;
                    const o24 = {
                        "done": v23,
                        "value": v19,
                    };
                    return o24;
                },
            };
            return o25;
        },
    };
}
