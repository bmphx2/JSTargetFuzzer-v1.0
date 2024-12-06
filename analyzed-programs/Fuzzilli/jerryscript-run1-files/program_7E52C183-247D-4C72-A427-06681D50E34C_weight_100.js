const v4 = new Set();
12 >> 5;
const v7 = WeakMap.iterator;
const o16 = {
    [v7]() {
        let v9 = 10;
        const o15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "done": v13,
                    "value": v9,
                };
                return o14;
            },
        };
        return o15;
    },
};
v4.length = 1;
o16[1461] = v4;
isNaN(isNaN);
