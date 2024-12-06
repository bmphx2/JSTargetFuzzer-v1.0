function f0() {
    const v3 = -Infinity;
    const o4 = {
        "f": 1073741824,
        "a": 1073741824,
        "e": 1073741824,
        0: "e",
        "g": v3,
        __proto__: "e",
        ["e"]: v3,
        1: v3,
        ..."e",
        "h": "e",
        "d": 1073741824,
    };
    return o4;
}
const v5 = f0();
f0();
const v7 = f0();
function F8(a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a10;
    this.f = v5;
}
const v11 = new F8(F8);
const v12 = new F8(v11);
const v13 = new F8(F8);
function f14(a15, a16, a17) {
    const o26 = {
        "c": a16,
        [-1]: a15,
        __proto__: a17,
        [v12]: a17,
        "f": f0,
        [a17](a19, a20, a21, a22) {
            return 65536;
        },
    };
    return o26;
}
f14(v5, v7, v13);
f14(v11, v5, v12);
f14(v5, v5, v5);
new BigInt64Array(1);
function f38(a39, a40) {
    for (let v41 = 0; v41 < 5; v41++) {
        const v42 = `
            function F43(a45, a46) {
                if (!new.target) { throw 'must be called with new'; }
            }
        `;
        eval(v42);
    }
    return a39;
}
f38(f38, f38);
new BigUint64Array(16);
new Uint16Array(84);
new Float32Array(4096);
new Uint16Array(4096);
const v62 = new Uint16Array(10);
v62[30];
