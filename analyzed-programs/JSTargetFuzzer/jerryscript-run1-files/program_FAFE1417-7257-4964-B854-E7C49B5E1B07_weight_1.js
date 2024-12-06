[1073741825,536870912];
([[1073741825],536870912])[129];
const v8 = Symbol.iterator;
const o17 = {
    [v8]() {
        let v10 = 10;
        const o16 = {
            next() {
                v10--;
                const v14 = v10 == 0;
                const o15 = {
                    "done": v14,
                    "value": v10,
                };
                return o15;
            },
        };
        return o16;
    },
};
const v25 = new Date();
Date.parse(1);
v25.toUTCString();
