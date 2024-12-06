function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 55362;
    try {
        new Date(4087n);
    } catch(e6) {
    } finally {
    }
}
new F0();
const v8 = new F0();
const v9 = new F0();
const v11 = new WeakSet();
new WeakSet();
function f14(a15, a16, a17) {
    const o30 = {
        get d() {
            super.h = a17;
            super.b = a16;
            const v20 = Symbol.iterator;
            const o29 = {
                [v20]() {
                    let v22 = 10;
                    const o28 = {
                        next() {
                            v22--;
                            const v26 = v22 == 0;
                            const o27 = {
                                "done": v26,
                                "value": v22,
                            };
                            return o27;
                        },
                    };
                    return o28;
                },
            };
            return this;
        },
    };
    return o30;
}
f14(v8, f14(v9, WeakSet, v8), v11);
f14(v9, WeakSet, v8);
let v38 = SyntaxError(SyntaxError);
v38++;
