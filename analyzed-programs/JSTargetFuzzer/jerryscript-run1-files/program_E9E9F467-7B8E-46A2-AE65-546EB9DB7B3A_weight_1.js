const v1 = new Set();
class C2 extends Set {
    p(a4, a5) {
        return v1;
    }
    constructor(a10, a11) {
        super(v1);
        let v12 = 10;
        for (; v12--;) {
        }
    }
}
const v17 = new C2(Set, C2);
const v18 = new C2(v17, C2);
const v19 = new C2(v18, Set);
function f20(a21, a22) {
    const o29 = {
        "g": C2,
        65535: a21,
        "f": a21,
        [a21](a24, a25) {
            for (let v26 = 0; v26 < 32; v26++) {
                a21["p" + v26] = v26;
            }
            return a25;
        },
    };
    return o29;
}
f20(v1, v19);
f20(v18, v19);
f20(v19, v19);
const o34 = {
    ["prototype"]: "prototype",
};
const v40 = new Int32Array(7);
new Float32Array(13);
new BigInt64Array(255);
("description")["repeat"](4096);
new Int32Array(15, 13);
const o58 = {
    "a": v40,
    "d": Int32Array,
    "c": 4294967296n,
    "b": 7,
};
