new Int8Array(6);
new Float32Array(1000);
new Int8Array(2);
const v13 = ("unicode").__proto__;
for (let v14 = 0; v14 < 5; v14++) {
    v13 + v14;
}
const v17 = Symbol.iterator;
const o26 = {
    [v17]() {
        let v19 = 10;
        const o25 = {
            next() {
                v19--;
                const v23 = v19 >= 0;
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
