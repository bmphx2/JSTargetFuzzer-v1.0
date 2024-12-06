const v5 = new Float64Array(1024);
const v8 = new Int8Array(8);
v8.f = v5;
const v12 = Symbol.iterator;
const o21 = {
    [v12]() {
        let v14 = 10;
        const o20 = {
            next() {
                v14--;
                const v18 = v14 == 0;
                const o19 = {
                    "done": v18,
                    "value": v14,
                };
                return o19;
            },
        };
        return o20;
    },
};
new BigInt64Array(27);
function f24(a25, a26, a27) {
    return a27;
}
class C28 extends f24 {
}
try { C28(); } catch (e) {}
