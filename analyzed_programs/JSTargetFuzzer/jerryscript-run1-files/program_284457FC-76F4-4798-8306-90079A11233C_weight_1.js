try {
const t0 = 2n;
new t0(-2);
} catch (e) {}
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
new Uint32Array(2);
new BigInt64Array(128);
switch (2n) {
    case 1073741824:
        break;
}
new Float64Array(11);
const v32 = new Uint8Array(4);
function f33(a34, a35) {
    const o36 = {
    };
    return o36;
}
v32.every(f33);
