function f0() {
    const o4 = {
        __proto__: "object",
        "a": 1.0865154380414544e+308,
        "h": "object",
        "f": 1.0865154380414544e+308,
        "b": "-942225314",
        2: "-942225314",
        ["-942225314"]: "-942225314",
        [1.0865154380414544e+308]: "-942225314",
        ..."object",
        9: "object",
        ["object"]: 1.0865154380414544e+308,
        "c": "-942225314",
        [-1]: "object",
        "e": "object",
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v7 = f0();
function f8(a9, a10) {
    const o35 = {
        set d(a12) {
            for (let v13 = 0; v13 < 32; v13++) {
                a12["p" + v13] = v13;
            }
        },
        ...v7,
        [a10](a17, a18, a19, a20) {
            try { a10(f8); } catch (e) {}
            super.b;
            new Float32Array(5);
            new BigUint64Array(5);
            new Uint32Array(3);
            return 5;
        },
    };
    return o35;
}
f8(v5, v6);
f8(v6, v7);
f8(v7, v5);
[-3];
[-7];
[9007199254740990];
const v47 = ([-16,4]).slice(45103);
const v50 = new BigInt64Array(2863);
v50[9] = v47;
