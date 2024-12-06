const v3 = [1n,-1024n];
let v4 = [v3,257n,-1024n,-1024n,-1024n];
const v5 = [257n,1n,-1024n];
function f6(a7, a8, a9) {
    const o22 = {
        "f": -1024n,
        [a9](a11, a12, a13, a14) {
            super.c = a14;
            a9 || 257n;
            Math.random();
            let v19 = v4--;
            v5 >>> v5;
            v19++;
            return a9;
        },
        "d": v5,
        [1n]: 257n,
    };
    return v5;
}
const v24 = Symbol.iterator;
const o33 = {
    [v24]() {
        let v26 = 10;
        const o32 = {
            next() {
                v26--;
                const v30 = v24 == 0;
                const o31 = {
                    "done": v30,
                    "value": v26,
                };
                return o31;
            },
        };
        return o32;
    },
};
f6(v4, 1n, f6);
const v36 = f6(v5, -1024n, f6(v3, 257n, v3));
[v36,v36,v36,v4];
[257n,v36,v36];
[257n,v5,v3];
function* f43(a44, a45) {
    delete v3[1073741823];
    new Uint8ClampedArray(8);
    new BigInt64Array(2705);
    new Float64Array(203);
    return yield a45;
}
f43(v36, -2);
const v60 = new Uint8ClampedArray(3007);
function f61(a62, a63) {
    return Uint8ClampedArray;
}
v60.map(f61);
