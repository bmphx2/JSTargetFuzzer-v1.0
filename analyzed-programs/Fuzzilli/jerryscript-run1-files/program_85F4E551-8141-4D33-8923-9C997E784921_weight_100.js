const v0 = [-1796721692,-15,536870888,-10,-2,268435440,3,4,8,-9083];
const v1 = [6,1,-61747,4294967296,0,-53710];
const v2 = [4884,-1073741824,268435441];
const v7 = new Set();
function f8(a9, a10, a11, a12) {
    const o18 = {
        __proto__: a11,
        "d": a12,
        "a": a11,
        "g": a10,
        ...v1,
        "c": Set,
        [v2](a14, a15) {
            throw v1;
            try {
                super.map(5.0, a12, v7, v1);
            } catch(e17) {
            }
            return this;
        },
    };
    return o18;
}
const v19 = f8(3.0, 3.0, v1, 3.0);
const v20 = f8(5.0, 5.0, v1, 3.0);
const v21 = f8(5.0, 3.0, v2, 3.0);
for (const v22 of v7) {
    try { new v22(v21, v0); } catch (e) {}
    v21[7] -= 5.0;
}
function f24(a25, a26) {
    const o27 = {
        10: v20,
        "b": a25,
        [a25]: a26,
    };
    return o27;
}
f24(v21, 5.0);
f24(v19, 3.0);
f24(v19, 3.0);
