new BigUint64Array(3042);
new Uint16Array(7);
const v11 = new Int32Array(257);
function f12() {
    return v11;
}
function f13(a14, a15) {
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
new Promise(f13);
