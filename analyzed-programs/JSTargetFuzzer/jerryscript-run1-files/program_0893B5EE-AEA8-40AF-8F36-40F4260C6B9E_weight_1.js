try { (3600).repeat(3); } catch (e) {}
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
new Uint32Array(3600);
new Int32Array(179);
new Float32Array(2542);
try {
    new BigInt64Array(2);
    new BigUint64Array(6);
    new Uint8Array(1);
} finally {
    o16[1073741823] = Float32Array <= Uint32Array;
}
const v36 = [String];
Reflect.apply(String.raw, String, v36);
