class C3 {
    set c(a5) {
        const v6 = 64n + -4294967295n;
        try { a5(v6, this); } catch (e) {}
    }
    static [64n];
    static valueOf(a9) {
        const v11 = Symbol.iterator;
        const o20 = {
            [v11]() {
                let v13 = 10;
                const o19 = {
                    next() {
                        v13--;
                        const v17 = v13 == 0;
                        const o18 = {
                            "done": v17,
                            "value": v13,
                        };
                        return o18;
                    },
                };
                return o19;
            },
        };
        return 1618072284n;
    }
}
const v21 = new C3();
const v22 = new C3();
const v23 = new C3();
function f24(a25, a26, a27) {
    const o36 = {
        [a26]: C3,
        ...v21,
        ...v21,
        set f(a29) {
            a29 = a25;
        },
        "a": a26,
        "h": 64n,
        ...v23,
        valueOf(a31, a32, a33, a34) {
            super.a ||= super.c;
            return a32;
        },
        2: 64n,
    };
    return o36;
}
f24(v21, 1618072284n, 64n);
const v38 = f24(v22, f24, -4294967295n);
f24(v22, f24, -4294967295n);
class C43 {
    static f = v21;
    static set g(a45) {
        new Float64Array(4096);
        new Float64Array(302);
        new Float64Array(5);
    }
    #d = -8;
    static #c = v38;
    static e = 256;
}
const v55 = new C43();
const v56 = new C43();
new C43();
const v58 = +v56;
v56.__proto__ = C43;
function F59(a61, a62, a63, a64) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v55;
}
const v65 = new F59(-8, -8, -4294967295n, -8);
const v66 = new F59(-8, -8, 64n, v65);
new F59(v58, v58, 64n, v66);
