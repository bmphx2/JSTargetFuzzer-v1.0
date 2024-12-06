const v3 = [-30324,-10,2,2,1259260546,129,1231204120,65535,-5761,-7];
const v4 = [268435456];
const v5 = [13,-759315061,2,2,-2082668340,-2025441108,-65536];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v5;
    this.h = 4096;
}
const v15 = new F9(v3, -65536, v3, -65536);
const v16 = new F9(v4, -1, v3, 4096);
const v17 = new F9(v5, -65536, v4, -1);
function f18(a19, a20, a21, a22) {
    const o29 = {
        [a19](a24, a25) {
            return a19;
        },
        "g": v17,
        "f": F9,
        ...a19,
        "c": F9,
        [v4]: v16,
        "e": v4,
        ..."As",
        "d": v16,
        "a": a19,
    };
    return o29;
}
const v30 = f18(v16, v4, F9, v17);
f18(v16, v3, f18(v17, v4, F9, 4096), v30);
function f33(a34, a35, a36) {
    const o37 = {
        "h": 4096,
        "c": a35,
    };
    return o37;
}
f33("symbol", 4096, v15);
f33("811528937", v5, v17);
f33("As", "811528937", v16);
