new BigUint64Array(79);
new BigUint64Array(5);
new Int8Array(5);
const v15 = [-1796721692,-15,536870888,-10,-2,268435440,3,4,8,-9083];
const v16 = [6,1,-61747,4294967296,0,-53710];
const v17 = [4884,-1073741824,268435441];
const v22 = new Set();
function f23(a24, a25, a26, a27) {
    const o33 = {
        __proto__: a26,
        "d": a27,
        "a": a26,
        "g": a25,
        ...v16,
        "c": Set,
        [v17](a29, a30) {
            throw v16;
            try {
                super.map(5.0, a27, v22, v16);
            } catch(e32) {
            }
            return this;
        },
    };
    return o33;
}
const v34 = f23(3.0, 3.0, v16, 3.0);
const v35 = f23(5.0, 5.0, v16, 3.0);
const v36 = f23(5.0, 3.0, v17, 3.0);
for (const v37 of v22) {
    try { new v37(v36, v15); } catch (e) {}
    v36[7] -= 5.0;
}
function f39(a40, a41) {
    const o42 = {
        10: v35,
        "b": 79,
        [a40]: a41,
    };
    return o42;
}
f39(v36, 5.0);
f39(5.0, 3.0);
f39(v34, 3.0);
