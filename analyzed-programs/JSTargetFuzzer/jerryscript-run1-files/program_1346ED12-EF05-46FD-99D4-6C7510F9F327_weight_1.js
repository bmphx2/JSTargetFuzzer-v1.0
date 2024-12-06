function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 4294967296;
    this.a = 4294967296;
    this.g = 4294967296;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    constructor(a8, a9) {
        super();
        const v11 = typeof v3;
        +(v11 === "function");
        const t13 = "function";
        delete t13["function"];
        v11 ** C6;
        try {
            super.p(F0);
        } catch(e20) {
        }
        Math.cbrt(-60273);
        const v22 = -15153 - a8;
        Math.floor(a8);
        -60273 >>> v22;
    }
    valueOf(a26) {
        if (v4 === a26) {
            a26[128] = a26;
        } else {
            const v28 = new F0();
            try {
                super.n(v28);
            } catch(e30) {
            }
            F0 && v5;
        }
        return this;
    }
}
const v32 = new C6(v5, v3);
const v33 = new C6(v4, v4);
const v34 = new C6(v32, v32);
const v36 = new Map();
function f37(a38, a39, a40, a41) {
    const o54 = {
        "e": a40,
        get b() {
            for (let v43 = 0; v43 < 32; v43++) {
                this["p" + v43] = v43;
            }
            return v36;
        },
        toString(a47, a48, a49, a50) {
            class C52 extends a38.constructor {
                7;
                [a38] = a41;
            }
            new C52();
            return v4;
        },
    };
    return o54;
}
f37(v32, v34, v5, F0);
f37(v3, v33, v32, Map);
f37(v33, v34, v32, v5);
let v62 = 10;
for ([-3.0,1.7182266648454853e+308,331.02351975919237,-1e-15,-4.0,-3.0,-Infinity]; v62--;) {
}
const v66 = new BigUint64Array(64);
try { v66.toLocaleString(v66); } catch (e) {}
