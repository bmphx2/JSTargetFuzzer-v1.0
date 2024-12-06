const v0 = [];
function f1() {
    const o12 = {
        [v0]() {
            let v5 = -18200;
            const v6 = v5++;
            Math.sinh(v6);
            Math.log1p(10000);
            Math.tan(10000);
            v6 >>> v6;
            return Math.log(10000);
        },
        "a": f1,
        ...v0,
        [v0]: v0,
    };
    return o12;
}
const v13 = f1();
const v14 = f1();
const v15 = f1();
function f16(a17, a18) {
    const o22 = {
        "f": v15,
        "d": a17,
        __proto__: a18,
        [a18]: v13,
        [v14]: v13,
        ...a18,
        set g(a20) {
            Object.defineProperty(a20, a20, { set: f1 });
            v13.a /= a20;
            try { a20.toString(a18); } catch (e) {}
        },
        [v15]: v15,
        "h": f1,
        "b": f1,
        "d": v15,
    };
    return o22;
}
const v23 = f16(v14, v15);
const v24 = f16(v23, v23, v14, f1);
const v25 = f16(v24, v15);
function f29(a30, a31, a32) {
    const o36 = {
        set c(a34) {
            a34--;
        },
        __proto__: v25,
        "h": 54520,
        9: f16,
        ...v25,
        [v14]: v25,
        "e": v14,
        "c": v13,
        "b": v24,
        [f16]: v0,
        "f": -13,
        "a": v0,
        "g": a30,
    };
    return -13;
}
f29(-13, 0, f1);
f29(0, -13, 54520);
f29(54520, 0, v24);
typeof 65535n;
