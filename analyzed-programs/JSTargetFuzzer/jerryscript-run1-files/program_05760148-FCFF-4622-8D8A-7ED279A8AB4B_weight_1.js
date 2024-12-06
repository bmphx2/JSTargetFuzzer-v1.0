function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 44970;
    this.c = 44970;
}
const v3 = new F0();
new F0();
const v6 = Uint16Array.iterator;
const o15 = {
    [v6]() {
        let v8 = 10;
        const o14 = {
            next() {
                v8--;
                const v12 = v8 == 0;
                const o13 = {
                    "done": v12,
                    "value": v8,
                };
                return v3;
            },
        };
        return o14;
    },
};
new F0();
new BigInt64Array(5);
new BigInt64Array(1000);
new Uint8ClampedArray(4096);
const v34 = new Uint32Array(3);
new Uint8Array(10);
new Uint32Array(21);
const v41 = [2.220446049250313e-16,NaN,1000.0,-Infinity,-2.0,0.8418049481265658];
[-2.2250738585072014e-308];
[0.5565764498837954];
try {
    v34[5] = "I";
} finally {
    o15.valueOf = 10;
    try { v41.reduce("b"); } catch (e) {}
}
+Uint32Array;
