new BigInt64Array(16);
new Int32Array(3);
new BigUint64Array(257);
function f9(a10, a11, a12) {
    const o29 = {
        "h": Int32Array,
        o(a14, a15, a16) {
            new Int32Array(5);
            new BigInt64Array(3265);
            new BigInt64Array(4096);
            return a10;
        },
    };
    return o29;
}
f9(Int32Array, 3, 257);
f9(BigUint64Array, 3, 16);
f9(257, 16, 3);
const v35 = new Int32Array(1024);
const o46 = {
    p(a37, a38) {
        let v39;
        try {
        const t0 = 1024;
        v39 = t0(this, a38, a37, a38, v35);
        } catch (e) {}
        Reflect.apply(("object").charCodeAt, a38);
        v35[0] in v39;
        return Int32Array;
    },
};
try { o46.p(Int32Array, v35); } catch (e) {}
