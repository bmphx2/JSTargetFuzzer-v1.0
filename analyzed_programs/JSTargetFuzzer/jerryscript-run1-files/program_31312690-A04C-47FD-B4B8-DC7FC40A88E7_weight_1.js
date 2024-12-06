const v5 = new Map();
for (let v6 = 0; v6 < 5; v6++) {
    v5["set"](v6);
}
v5.get(Map);
new Uint32Array(2);
new BigUint64Array(2412);
new BigInt64Array(BigInt64Array);
const o26 = {
    valueOf(a19) {
        for (const v20 in this) {
            function F21(a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F21(this, a19);
        }
        return a19;
    },
};
try { o26.valueOf(o26, o26, 2412, o26); } catch (e) {}
