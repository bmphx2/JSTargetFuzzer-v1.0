const v4 = Symbol.iterator;
const o13 = {
    [v4]() {
        let v6 = 10;
        const o12 = {
            next() {
                v6--;
                const v10 = v6 == 0;
                const o11 = {
                    "done": v10,
                    "value": v6,
                };
                return o11;
            },
        };
        return o12;
    },
};
new Date();
let v17 = 0;
while (v17 < 3) {
    const o20 = {
        "apply": Date,
        "call": Date,
        "construct": Date,
        "defineProperty": Date,
        "getOwnPropertyDescriptor": Date,
        "isExtensible": Date,
        "ownKeys": Date,
        "preventExtensions": Date,
        "set": Date,
    };
    new Proxy(o13, o20);
    v17++;
}
new Float64Array(5);
new Float32Array(16);
new BigUint64Array(30);
let v32 = 0;
do {
    const v33 = v32++;
    function f34(a35, a36, a37, a38) {
        'use strict';
        new Set();
        return v33;
    }
    f34(v33, 9223372036854775807, 30, -1024);
} while (this << Float32Array, v32 < 8)
