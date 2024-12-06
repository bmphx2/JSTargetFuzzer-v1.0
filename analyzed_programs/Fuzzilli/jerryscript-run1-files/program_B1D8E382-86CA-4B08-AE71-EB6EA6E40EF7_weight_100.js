const v3 = [2n];
const v4 = [v3];
const v5 = [268435439n,v4,2n,v3,v4];
function f9(a10, a11) {
    const o12 = {
        "f": 64n,
        "b": a10,
        "c": v4,
        [a11]: 12n,
        "a": -5560n,
        [-5560n]: a10,
        "g": a11,
        0: 268435439n,
        [v4]: a11,
        "h": a11,
        "d": 268435439n,
        [a10]: -5560n,
    };
    return o12;
}
f9(v4, v5, f9(v3, 268435439n), -524215134n);
f9(v4, v3);
function f19(a20, a21) {
    const o29 = {
        ["-1073741824"]: "o",
        "e": "o",
        "c": "-1073741824",
        ..."-1073741824",
        __proto__: a21,
        ..."o",
        1073741824: a21,
        ...a20,
        "c": a21,
        ["o"]: a20,
        "a": a20,
        6: "-1073741824",
        "f": f19,
        "d": "c",
        [a21](a23) {
            const t39 = "c";
            t39.f = this;
            "-1073741824" | "c";
            this[160];
            a23[Symbol.isConcatSpreadable];
            return "o";
        },
    };
    let v30 = 0;
    while (v30 < -43465) {
        const o35 = {
            "maxByteLength": 1605,
        };
        const v37 = new ArrayBuffer(129, o35);
        new Uint8ClampedArray(v37, v37);
        v30++;
    }
    return o29;
}
const v41 = f19("c", "c");
const v42 = f19("-1073741824", "c");
const v43 = f19("o", "o");
const v46 = Symbol.species;
v42[v46] = v46;
v46[3] = v43;
v41[2];
class C51 extends Set {
}
const v52 = new C51();
const v53 = new C51(v52, v41);
const v56 = new Uint16Array(256);
const v58 = new Int16Array(v53, 256, 256);
v52.add(v58, C51);
v53.delete(...v56);
