class C3 {
    static b;
    valueOf(a5, a6) {
        a6 = a5;
        function f7(a8, a9) {
            'use strict';
            return a8;
        }
        f7(this, 2.220446049250313e-16);
        return 2.220446049250313e-16;
    }
    #e;
    143 = 128;
}
const v14 = new C3();
const v15 = new C3();
const v16 = new C3();
function F17(a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a20;
}
const v22 = new F17(2.220446049250313e-16, v16, F17);
const v23 = new F17(128, v14, v22);
const v24 = new F17(v16, v23, 2.220446049250313e-16);
function f26(a27, a28, a29) {
    const o38 = {
        "b": F17,
        "e": C3,
        "d": a29,
        p(a31, a32, a33) {
            try { C3.m(); } catch (e) {}
            return a33;
        },
        "h": v23,
        "c": v23,
        [v14]: v22,
        "a": a27,
    };
    return o38;
}
const v40 = f26(f26(v24, v16, v22), v15, undefined);
f26(v23, v16, f26(v23, v24, f26(v24, v16, 2.220446049250313e-16)));
f26 - v24;
v40.c;
const v47 = Symbol.iterator;
const o56 = {
    [v47]() {
        let v49 = 10;
        const o55 = {
            next() {
                v49--;
                const v53 = v49 == 0;
                const o54 = {
                    "done": v53,
                    "value": v49,
                };
                return o54;
            },
        };
        return o55;
    },
};
