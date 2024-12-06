const v1 = new Set();
function f2(a3) {
    const o9 = {
        __proto__: v1,
        set f(a5) {
            let v4 = this;
            ({"d":a5,"h":v4,...a5} = a3);
        },
        ...v1,
        "a": a3,
        "d": v1,
    };
    return o9;
}
f2(f2(f2(Set)));
function f19(a20, a21) {
    a21 = a20;
    const v23 = Symbol.iterator;
    const o32 = {
        [v23]() {
            let v25 = 10;
            const o31 = {
                next() {
                    v25--;
                    const v29 = v25 == 0;
                    const o30 = {
                        "done": v29,
                        "value": v25,
                    };
                    return o30;
                },
            };
            return o31;
        },
    };
    return a20();
}
new Promise(f19);
