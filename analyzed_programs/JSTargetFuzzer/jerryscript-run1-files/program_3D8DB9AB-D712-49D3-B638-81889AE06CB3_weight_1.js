const v2 = new BigUint64Array(8);
const v5 = new Float32Array(1);
const v8 = new BigInt64Array(3);
const v9 = [3,v8,8];
v9 << 268435441;
const v15 = [v5,v2,v9,8];
[v2,v15,1,1,v2];
const o20 = {
    2147483647: 268435441,
    [740336789]: 8,
    ...v9,
    "e": v15,
    ...v2,
    get g() {
        return this;
    },
    set g(a19) {
    },
};
