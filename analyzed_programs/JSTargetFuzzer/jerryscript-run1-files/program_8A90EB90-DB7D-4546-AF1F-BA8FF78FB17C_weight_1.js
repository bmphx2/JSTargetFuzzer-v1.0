const v1 = new Date();
1 % null;
const v7 = [];
v7[173] = -745907938;
v7[457] <<= -9223372036854775808;
function f13(a14, a15, a16, a17) {
    const o30 = {
        "f": Date,
        "b": v1,
        "a": a16,
        ...a17,
        get e() {
            function f19(a20, a21) {
                'use strict';
                a20.c = this;
                return a21;
            }
            return this;
        },
        p(a23, a24, a25) {
            const o27 = {
                "apply": Date,
                "construct": Date,
                "get": Date,
                "c": f13,
                get f() {
                    super.e = a16;
                    return this;
                },
                "set": Date,
                "setPrototypeOf": Date,
            };
            new Proxy(this, o27);
            return Date;
        },
    };
    return o30;
}
f13(-57125, -745907938, 1898171940, -57125);
f13(1898171940, 1667022606, 44314, f13);
f13(1667022606, 1667022606, 44314, f13);
new Int32Array(6);
let v38 = Int16Array;
new v38(184);
const v42 = new Float64Array(65);
[v38] = v42;
const v50 = Symbol.iterator;
const o59 = {
    [v50]() {
        let v52 = 10;
        const o58 = {
            next() {
                v52--;
                const v56 = v52 == 0;
                const o57 = {
                    "done": v56,
                    "value": v52,
                };
                return o57;
            },
        };
        return o58;
    },
};
