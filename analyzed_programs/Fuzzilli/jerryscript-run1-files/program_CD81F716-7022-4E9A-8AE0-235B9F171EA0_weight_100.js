new Int32Array(256);
new Uint16Array(1);
const v11 = new Uint16Array(2);
v11.__proto__ = v11;
const o12 = {
};
new Proxy(Uint16Array, o12);
const v16 = Symbol.iterator;
const o25 = {
    [v16]() {
        let v18 = 10;
        const o24 = {
            next() {
                v18--;
                const v22 = v18 == 0;
                const o23 = {
                    "done": v22,
                    "value": v18,
                };
                return o23;
            },
        };
        return o24;
    },
};
