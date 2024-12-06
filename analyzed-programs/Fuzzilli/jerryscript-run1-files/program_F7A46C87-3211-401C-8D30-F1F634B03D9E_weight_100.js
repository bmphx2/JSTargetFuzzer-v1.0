function f6() {
    return 10;
}
class C7 extends f6 {
    valueOf(a9, a10, a11) {
        Object.defineProperty(this, a11, { writable: true, get: f6 });
        let v12;
        try { v12 = this.o(a9, 10); } catch (e) {}
        new WeakSet();
        super.b;
        return v12;
    }
    static 2147483649 = 1024n;
    f;
    static #e;
    static c = -1073741824;
    5 = 1024n;
}
new C7();
const v17 = new C7();
const v18 = new C7();
function f19() {
    return 64n;
}
function f20(a21, a22) {
    const o43 = {
        [v17]: C7,
        [64n](a24, a25, a26, a27) {
            v18[a25] = a27;
            a25 = 0;
            new C7();
            const v33 = Symbol.iterator;
            const o42 = {
                [v33]() {
                    let v35 = 10;
                    const o41 = {
                        next() {
                            v35--;
                            const v39 = v35 == 0;
                            const o40 = {
                                "done": v39,
                                "value": v35,
                            };
                            return o40;
                        },
                    };
                    return o41;
                },
            };
            return o42;
        },
    };
    return o43;
}
const v44 = f20(536870888n, -1073741824);
f20(64n, 10);
f20(1024n, 10);
v44[0];
async function f51(a52, a53) {
    const v55 = Symbol.iterator;
    const o64 = {
        [v55]() {
            let v57 = 10;
            const o63 = {
                next() {
                    v57--;
                    const v61 = v57 == 0;
                    const o62 = {
                        "done": v61,
                        "value": v57,
                    };
                    return o62;
                },
            };
            return o63;
        },
    };
    return await C7;
}
f51(9007199254740992, 536870888n);
