const v0 = /\xf0\x9f\x92\xa9/uyid;
/ab\b\d\bcd/uygid;
const v2 = /u3a\nb6xyz{1,}?xyz{1,}?/vgs;
const v3 = [-1534469314,4096,8,8523,65537,255];
const v4 = [1073741823,-14,268435456,-1499249471,178751592,4294967297,13];
const v5 = [127,47679,4096,-4294967296,-7,536870889,1073741824,268435456,1073741825];
function f6(a7, a8, a9) {
    const o16 = {
        ...a9,
        __proto__: a9,
        "h": a7,
        9: v2,
        "d": v3,
        [v3](a11, a12, a13, a14) {
            super.d = v2;
            try { v0.test(...a13, a12, a12, ...a14, ...a14); } catch (e) {}
            return a13;
        },
        "c": v0,
        [a7]: a9,
        "g": a7,
        4096: v5,
        [-1]: v5,
    };
    return o16;
}
const v17 = f6(v4, v5, v3);
f6(f6(v0, v5, v3), v17, v4);
[-65535,-65536,-2];
[64,1242171253,955710547,2];
[2147483649,-64368678,-256,4,255,-1024,6,8,-1];
new Set();
for (const v25 in v5) {
    const v27 = [f6,v4];
    Reflect.apply(v5.reduce, v17, v27);
}
new Set(v5);
