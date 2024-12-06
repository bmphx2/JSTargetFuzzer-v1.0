function f0() {
}
class C1 {
    static 7;
    static #n() {
        new BigUint64Array(4);
        new Float64Array(277);
        new Float32Array(0);
        return f0;
    }
}
const v12 = new C1();
const v13 = new C1();
const v14 = new C1();
function f15(a16) {
    const o22 = {
        get h() {
            const v18 = delete this[f0];
            for (let v19 = 0; v19 < 32; v19++) {
                this["p" + v19] = v19;
            }
            return v18;
        },
        "h": v12,
        [a16]: v13,
        ...v12,
    };
    return o22;
}
f15(C1);
f15(f15(v12));
new Float32Array(0);
const v31 = new Uint8ClampedArray(257);
new BigInt64Array(6);
const o35 = {
    "c": v12,
    [257]: Uint8ClampedArray,
};
for (let v36 = 0; v36 < 8; v36++) {
    const v37 = delete v31?.byteOffset;
    v14[v37] = v37;
    C1[Symbol.replace];
}
