const v2 = new Float32Array(125);
new Uint8ClampedArray(3526);
const v8 = new Int16Array(9);
function f9() {
    return v2;
}
function f13(a14, a15, a16) {
    const o29 = {
        "d": a16,
        [9]: 9,
        get e() {
            function f18(a19, a20) {
                'use strict';
                a19.c = this;
                return a20;
            }
            return this;
        },
        "a": a15,
        [v2]: a16,
        set c(a22) {
            const o26 = {
                "apply": f9,
                "call": f9,
                "construct": f13,
                [a15]: a15,
                __proto__: a14,
                m(a24, a25) {
                    return a22;
                },
                "defineProperty": f9,
                "deleteProperty": f9,
                "get": f9,
                "getPrototypeOf": f9,
                "isExtensible": f9,
            };
            new Proxy(v8, o26);
        },
    };
    return o29;
}
f13(9, 9, f13(125, -268435456, Float32Array));
f13(3526, 3526, 9);
const v33 = [2147483649];
const v34 = [2147483648];
const v35 = [-3,-8];
function F36(a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a38;
}
const v39 = new F36(v34);
const v40 = new F36(v35);
const v41 = new F36(v40);
class C42 extends F36 {
    n(a44, a45, a46, a47) {
        v41[v33] = this;
        super.f;
        return v35;
    }
    constructor(a50, a51, a52) {
        super(a51);
        super.f;
        a51 * this;
        let v56 = 268435456;
        v56--;
        Math.log(v34);
        Math.sqrt(v56);
    }
}
const v60 = new C42(v41, v33, v35);
const v61 = new C42(v60, v35, v33);
const v62 = new C42(v60, v34, v35);
function f63(a64, a65) {
    const o78 = {
        __proto__: v34,
        "f": a65,
        "b": v60,
        [a65](a67, a68, a69) {
            for (let v70 = 0; v70 < 32; v70++) {
                function f71(a72, a73) {
                    return a72;
                }
                let v74 = undefined;
                v74 = arguments;
                a68["p" + v70] = v70;
            }
            return a65;
        },
        202: a64,
    };
    return o78;
}
f63(v39, f63(v39, v60));
f63(v62, v40);
typeof Float32Array === "object";
const t92 = "object";
t92.length *= v61["n"]();
[27658,1520640363,6,65537,839907017,-1024,38060];
[536870889];
new C42(v40, [65537,5749,3,59285], v33);
