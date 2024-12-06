function f0() {
}
const v2 = new WeakMap();
function f3(a4) {
    const o5 = {
        3257: a4,
        "c": a4,
        [v2]: f0,
        __proto__: a4,
        "a": a4,
        "f": a4,
        "g": a4,
        ...f0,
        "e": f0,
        "h": WeakMap,
    };
    return o5;
}
const v6 = f3(v2);
const v7 = f3(WeakMap);
const v8 = f3(v6);
function f9(a10, a11, a12, a13) {
    const o18 = {
        get c() {
            new f0();
            const v17 = new f0();
            a11 += v17;
            return a13;
        },
        "b": f9,
        "f": v8,
        __proto__: a10,
    };
    return o18;
}
const v19 = f9(v2, f3, v7, f3);
f9(v7, f9(v7, v19, v6, v8), v19, WeakMap);
for (let i = 0; i < 5; i++) {
}
for (let i = 0; i < 5; i++) {
}
