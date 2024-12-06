function f0() {
}
new Int32Array(4096);
new Uint8Array(164);
new Uint8Array(2);
function f10() {
    return Uint8Array;
}
[16,-256,65536];
[65535,127,1024,268435440,536870889,62974,24394,-62186,5];
[-1024];
const v18 = Symbol.iterator;
const o27 = {
    [v18]() {
        let v20 = 10;
        const o26 = {
            next() {
                v20--;
                const v24 = v20 == 0;
                const o25 = {
                    "done": v24,
                    "value": v20,
                };
                return o25;
            },
        };
        return o26;
    },
};
