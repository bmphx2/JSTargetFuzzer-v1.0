function f0() {
}
const v5 = Symbol.iterator;
const o14 = {
    [v5]() {
        let v7 = 10;
        const o13 = {
            next() {
                v7--;
                const v11 = v7 == 0;
                const o12 = {
                    "done": v11,
                    "value": v7,
                };
                return o12;
            },
        };
        return o13;
    },
};
new Uint8ClampedArray(3);
new Uint16Array(2);
const v23 = new Int32Array(0);
[-65536,-3,1,-9007199254740990];
[2,2147483649,-268435456,338035178,8,65535,44692];
[1332123231,46934,31096,9223372036854775807];
const v29 = new Uint8Array(v23, v23);
delete v29[-2];
