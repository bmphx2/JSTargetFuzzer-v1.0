const v1 = new Map();
function f2(a3) {
    const o11 = {
        "a": v1,
        __proto__: v1,
        "e": a3,
        o(a5, a6) {
            a3.__proto__;
            const v9 = new Date();
            try { a5(this, Date, v9, v9, Map, a3); } catch (e) {}
            return a6;
        },
        "d": v1,
        "b": a3,
        [v1]: v1,
        "g": Map,
        ...a3,
    };
    return o11;
}
f2(Map);
f2(f2(f2));
new Int16Array(4096);
new Int16Array(5);
const v23 = new BigUint64Array(2);
try { v23.reduceRight(f2, Int16Array); } catch (e) {}
new BigInt64Array(1024);
new Uint8ClampedArray(255);
new Int16Array(14);
