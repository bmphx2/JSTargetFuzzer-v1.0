function f0() {
    const o20 = {
        set h(a5) {
            const v7 = Symbol.iterator;
            const o19 = {
                [v7]() {
                    let v9 = 10;
                    const o15 = {
                        next() {
                            v9--;
                            const v13 = v9 == 0;
                            const o14 = {
                                "done": v13,
                                "value": v9,
                            };
                            return o14;
                        },
                    };
                    for (const v16 in this) {
                        this > v9;
                    }
                    Symbol.f = "filter";
                    try { new a5(f0); } catch (e) {}
                    return o15;
                },
            };
        },
    };
    return o20;
}
const v21 = f0();
const v22 = f0();
f0();
function f27(a28, a29) {
    const o37 = {
        16: -11n,
        [a28]: a28,
        ...a28,
        [536870888n](a31, a32, a33, a34) {
            new f0();
            delete a33[4294967295];
            v21.__proto__ = a33;
            return a29;
        },
        __proto__: a28,
        "f": f0,
    };
    return o37;
}
f27(v21, -11n);
f27(v22, -8n);
f27(v22, -8n);
const v41 = [];
function f42() {
    v41.h = f42;
    return f42;
}
const v43 = f42();
v41.push(f42(), v43);
