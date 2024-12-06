const v2 = new Array(4027);
const v3 = [Array,v2,Array,4027,Array];
const v4 = [4027,v2,v3];
const v5 = [v4,v2,v3,v4,v3];
function f6(a7, a8, a9) {
    const o16 = {
        [a8]: v3,
        p(a11, a12, a13) {
            super.c = v2;
            v2["pop"]();
            return Array;
        },
        "d": a7,
        "e": a7,
        __proto__: v5,
        "a": v5,
        "h": v3,
        536870912: a8,
    };
    return o16;
}
for (let v17 = 0; v17 < 32; v17++) {
    const v19 = "p" + v17;
    Array[v19] = v19;
}
f6(v3, v2, v4);
f6(v4, v4, v3);
f6(v3, v2, v2);
[22502,65535,-1,15,1024,-65537];
[-16090,-4294967297,-65536,-2147483649,6];
[-771835297];
function f26() {
    const o28 = {
        [f26]() {
        },
    };
    return o28;
}
for (const v30 in f6()) {
    v30.search(v30);
}
