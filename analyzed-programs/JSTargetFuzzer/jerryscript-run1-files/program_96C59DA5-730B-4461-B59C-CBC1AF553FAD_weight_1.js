const v1 = new Date();
127 % null;
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
                "prototype": Date,
                "get": Date,
                "c": f13,
                get f() {
                    super.e = a16;
                    return this;
                },
                "prototype": Date,
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
let v38 = Date;
new v38(184);
const v42 = new Float64Array(65);
[v38] = v42;
const v50 = Symbol.iterator;
const o83 = {
    [v50]() {
        let v52 = 10;
        const o82 = {
            next() {
                v52--;
                function F62(a64, a65, a66, a67) {
                    if (!new.target) { throw 'must be called with new'; }
                    a66.d = a67;
                    this.f = a64;
                }
                const v68 = new F62(-4294967296, 5n, "-16", "-16");
                if (-1) {
                } else {
                    function F69(a71, a72, a73) {
                        if (!new.target) { throw 'must be called with new'; }
                        this.c = a73;
                    }
                    const v74 = F69(F69, v68, "function");
                    class C75 extends F62 {
                        127;
                        static a = v68;
                    }
                    new C75();
                    new C75();
                    new C75();
                    const t73 = -1;
                    new t73(v74, "global", "function");
                }
                const v80 = v52 == 0;
                const o81 = {
                    "done": v80,
                    "value": v52,
                };
                return o81;
            },
        };
        return o82;
    },
};
