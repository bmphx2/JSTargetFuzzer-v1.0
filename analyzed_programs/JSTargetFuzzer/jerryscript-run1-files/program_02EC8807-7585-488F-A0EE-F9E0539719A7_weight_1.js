function f6(a7, a8, a9) {
    const o12 = {
        "c": a9,
        get h() {
            super.e = delete a8[2];
            return "symbol";
        },
        "d": "9007199254740992",
        "g": 37803,
        127: a8,
        "c": 37803,
        "e": 9007199254740991,
        ["symbol"]: a8,
        __proto__: a7,
        [14]: a9,
        ...a9,
    };
    return o12;
}
const v13 = f6("symbol", "string", "9007199254740992");
const v14 = f6("symbol", "string", "symbol");
const v15 = f6("9007199254740992", "symbol", "string");
function f16(a17, a18, a19) {
    const o39 = {
        [a19]: v13,
        [a18]: "9007199254740992",
        set b(a21) {
            const v22 = super.b;
            try {
                super.p(v22);
            } catch(e24) {
            }
        },
        m(a26, a27, a28) {
            try { new a26(a27, this, a17, a26); } catch (e) {}
            function f30() {
                return this;
            }
            function F31(a33, a34, a35) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a33;
                this.c = a17;
            }
            new F31(a19, a19, v15);
            new F31(a28, "symbol", "9007199254740992", F31, a27);
            new F31(a18, a26, 9007199254740991);
            return a28;
        },
    };
    return o39;
}
const v40 = f16(v13, "string", v14);
const v42 = f16(v40, "string", v14, f16(v15, "symbol", "string"), v13);
function F43(a45, a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a47;
    this.h = v42;
    this.a = v15;
}
new F43(v42, "9007199254740992", "string");
new F43(v42, "symbol", "9007199254740992");
new F43(v40, "9007199254740992", "9007199254740992");
class C52 {
    valueOf(a54, a55) {
        new BigInt64Array(1403512483);
    }
}
const v58 = new C52();
async function f59(a60, a61) {
    return a60 /= C52;
}
f59(v58);
