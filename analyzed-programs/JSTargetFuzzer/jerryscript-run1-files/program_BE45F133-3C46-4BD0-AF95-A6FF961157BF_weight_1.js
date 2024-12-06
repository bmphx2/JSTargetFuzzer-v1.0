function f0() {
    const o16 = {
        ..."function",
        202: "function",
        get f() {
            const v6 = Symbol.iterator;
            const o15 = {
                [v6]() {
                    let v8 = 10;
                    const o14 = {
                        next() {
                            v8--;
                            const v12 = v8 == 0;
                            const o13 = {
                                "done": v12,
                                "value": v8,
                            };
                            return o13;
                        },
                    };
                    return o14;
                },
            };
            return o15;
        },
    };
    return o16;
}
f0();
f0();
f0();
new Set();
new WeakMap();
const v31 = new Date();
const v33 = new WeakMap();
function F34(a36) {
    if (!new.target) { throw 'must be called with new'; }
}
class C37 extends F34 {
    constructor(a39, a40, a41) {
        super();
        v33.get();
    }
}
new C37();
v31.setMinutes();
