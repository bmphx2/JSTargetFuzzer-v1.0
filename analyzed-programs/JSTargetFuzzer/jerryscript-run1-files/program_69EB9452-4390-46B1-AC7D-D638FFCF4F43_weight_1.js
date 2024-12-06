function f6(a7, a8) {
    const o9 = {
        "c": a8,
        "f": 536870888,
        [a7]: "o",
        64: "K2z",
        "d": 536870888,
        "g": 536870887,
        "a": "o",
        "b": 536870887,
        [536870887]: a7,
        "e": 536870887,
        "h": f6,
        ...a8,
        ..."K2z",
        __proto__: a8,
        "h": 536870888,
    };
    return o9;
}
f6(536870888, "string");
const v11 = f6(512, "o");
f6(536870887, "K2z");
function f13() {
    const o14 = {
    };
    return o14;
}
const v15 = f6();
class C16 extends f13 {
}
const v17 = new C16();
const v18 = v15 <= v11;
f13();
for (let v20 = 0; v20 < 32; v20++) {
    v11["p" + v20] = v20;
}
if (v18) {
    try {
    } catch(e23) {
    } finally {
        v11.d;
        v17.a = v11;
        const v26 = Symbol.iterator;
        const o35 = {
            [v26]() {
                let v28 = 10;
                const o34 = {
                    next() {
                        v28--;
                        const v32 = v28 == 0;
                        const o33 = {
                            "done": v32,
                            "value": v28,
                        };
                        return o33;
                    },
                };
                return o34;
            },
        };
    }
    function f36() {
        return f36;
    }
}
