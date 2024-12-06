const v0 = [-1652390456,9007199254740991,1073741824];
const v1 = [2];
const v2 = [1920,63245,1651223269,-1209033725,-2147483649,42561,1699223737,-4294967295,7];
function f6() {
    return -43080n;
}
new WeakMap();
let v9 = Map;
const v10 = new v9();
function f14(a15, a16, a17, a18) {
    const o25 = {
        "b": a17,
        "e": a18,
        "g": a15,
        __proto__: v10,
        "c": a16,
        "f": WeakMap,
        "a": a17,
        set g(a20) {
            Object.defineProperty(v0, 484, { enumerable: true, get: f6, set: f6 });
            const v21 = delete this[10];
            let v22 = this[10];
            ({"a":v9,"g":a15,...v22} = v22);
            try {
                super.p(v21, 9223372036854775807, v22, a18, v21);
            } catch(e24) {
            }
        },
        2147483649: WeakMap,
        "g": WeakMap,
        "f": f6,
    };
    return o25;
}
const v26 = f14(v1, v1, -43080n, v2);
f14(v2, v2, 268435441n, v1);
f14(v0, v0, -43080n, v0);
function F29() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
}
const v32 = new F29();
const v33 = new F29();
function f34(a35, a36) {
    const o42 = {
        ...v33,
        __proto__: v32,
        m(a38, a39, a40, a41) {
            return this;
        },
    };
    if (a36 <= o42) {
    } else {
        [WeakMap,a35,a36];
        [f6,v26,6,v1];
        [o42,a36];
    }
    return o42;
}
for (const v49 in f34()) {
    f34().d;
    v33[Symbol.unscopables] = v33;
}
