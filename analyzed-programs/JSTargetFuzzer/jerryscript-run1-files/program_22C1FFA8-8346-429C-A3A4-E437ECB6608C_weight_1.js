const v3 = new Uint8Array(255);
const o5 = {
    "a": true,
};
const v7 = Symbol.iterator;
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
new Int8Array(8);
Uint8Array & Int8Array;
v3.buffer = Int8Array;
new Float32Array(255);
const v27 = new Map();
v27["set"]();
