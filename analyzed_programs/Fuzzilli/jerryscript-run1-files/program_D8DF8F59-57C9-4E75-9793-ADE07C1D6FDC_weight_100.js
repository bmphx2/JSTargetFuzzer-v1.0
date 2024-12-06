const v1 = new WeakMap();
new WeakSet();
[-10406,-65536,826,-65537,588701811,1073741823,9007199254740991,65536];
[-503076242,-10688,-4096,-254136079,2928,129];
[116036415,79349393,-4294967296];
const o13 = {
};
const v15 = new Proxy(WeakSet, o13);
v1[4294967295] = v15;
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
