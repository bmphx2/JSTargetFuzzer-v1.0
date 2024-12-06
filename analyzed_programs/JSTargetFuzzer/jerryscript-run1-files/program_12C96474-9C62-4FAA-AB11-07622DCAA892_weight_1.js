const t0 = "m";
t0[Symbol.replace] = 12;
const v9 = Symbol.iterator;
const o18 = {
    [v9]() {
        let v11 = 10;
        const o17 = {
            next() {
                v11--;
                const v15 = v11 == 0;
                const o16 = {
                    "done": v15,
                    "value": v11,
                };
                return o16;
            },
        };
        return o17;
    },
};
new BigInt64Array(116);
new Uint32Array(8);
new Uint16Array(2002);
const v30 = new Float64Array(16);
for (let v31 = 0; v31 < 32; v31++) {
    o18["p" + v31] = v31;
}
function f34(a35) {
    const o36 = {
    };
    return o36;
}
v30.findIndex(f34);
