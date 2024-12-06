const t0 = 1243920751;
t0.valueOf = -259482598;
37803 === 14;
function f17(a18, a19, a20) {
    const o23 = {
        "c": a20,
        get h() {
            super.e = delete a19[2];
            return "symbol";
        },
        "d": "9007199254740992",
        "g": 37803,
        127: a19,
        "c": 37803,
        "e": 9007199254740991,
        ["symbol"]: a19,
        __proto__: a18,
        [14]: a20,
        ...a20,
    };
    return o23;
}
const v24 = f17("symbol", "string", "9007199254740992");
const v25 = f17("symbol", "string", "symbol");
const v26 = f17("9007199254740992", "symbol", "string");
function f27(a28, a29, a30) {
    const o55 = {
        [a30]: v24,
        [a29]: "9007199254740992",
        set b(a32) {
            const v33 = super.b;
            try {
                super.p(v33);
            } catch(e35) {
            }
            try {
                super.set(v26);
            } catch(e40) {
            }
        },
        m(a42, a43, a44) {
            try { new a42(a43, this, a28, a42); } catch (e) {}
            function f46() {
                return a29;
            }
            function F47(a49, a50, a51) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a49;
                this.c = a28;
            }
            new F47(a30, a30, v26);
            new F47(a44, a30, "9007199254740992", F47, a43);
            new F47(a29, a42, 37803);
            return a44;
        },
    };
    return o55;
}
const v56 = f27(v24, "string", v25);
const v58 = f27(v56, "string", v25, f27(v26, "symbol", "string"), v24);
function F59(a61, a62, a63) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a63;
    this.h = v58;
    this.a = v26;
}
new F59(v58, "9007199254740992", "string");
new F59(v58, "symbol", "9007199254740992");
new F59(v56, "9007199254740992", "9007199254740992");
class C68 {
    valueOf(a70, a71) {
        new BigInt64Array(1403512483);
    }
}
const v74 = new C68();
async function f75(a76, a77) {
    a76 /= C68;
    return v58;
}
f75(v74);
