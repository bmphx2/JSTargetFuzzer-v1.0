class C3 {
    static p(a5, a6) {
        const v8 = Symbol.iterator;
        const o17 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "h": 0,
                            "a": a5,
                            16: v10,
                            [this]: v10,
                            ...a5,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                return o16;
            },
        };
        return o17;
    }
}
const v18 = new C3();
new C3();
new C3();
function f27(a28, a29, a30, a31) {
    const o45 = {
        m(a33, a34, a35) {
            try {
                super.deref(a35, a31, -167782134, v18, a35);
            } catch(e37) {
            }
            const v41 = new Uint16Array(1024);
            function f42() {
                return 58816;
            }
            v41["filter"](f42);
            return a29;
        },
    };
    return o45;
}
Reflect.apply(f27().m);
