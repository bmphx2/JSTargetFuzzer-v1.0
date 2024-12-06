let v3 = [-36729];
const v4 = [v3];
const v5 = [-36729,v4];
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -36729;
    this.a = a8;
}
const v12 = new F6(v5, 6152, 42424, v4);
const v13 = new F6(v4, 42424, 6152, v12);
const v14 = new F6(v3, 42424, -36729, 42424);
function f15(a16, a17) {
    const o20 = {
        "d": v14,
        "e": 6152,
        1003380689: 42424,
        get c() {
            let v19;
            try { v19 = this.valueOf(42424); } catch (e) {}
            v3 = v19;
            this.toString = v19;
            return v19;
        },
        "a": 6152,
        ...a17,
        __proto__: v5,
        "g": a16,
    };
    return o20;
}
const v21 = f15(-36729, -36729);
f15(v3, v21);
f15(-36729, v3);
try {
    v4.e = v13;
} finally {
    let v24;
    try { v24 = v3(v4, v4); } catch (e) {}
    v24 + v14;
}
f15(-36729, v21);
1995379927 >>> -13;
+(1995379927 - v3);
