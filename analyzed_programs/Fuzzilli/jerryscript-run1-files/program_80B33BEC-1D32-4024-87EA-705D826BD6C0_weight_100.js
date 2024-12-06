function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 65537;
    this.e = 65537;
    this.f = 65537;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f12(a13, a14, a15, a16) {
    const o23 = {
        get f() {
            "c" * this;
            const o19 = {
            };
            const v21 = new Proxy("c", o19);
            let v22;
            try { v22 = new a15(v21, v5, this, a15, "c"); } catch (e) {}
            return v22;
        },
        __proto__: a16,
        ...v4,
        "d": "c",
        1671: -12n,
    };
    return o23;
}
f12(-12n, 63836n, v3, "c");
f12(21181n, -12n, v3, "c");
f12(-12n, -12n, "p", "c");
new F0();
function f44() {
    return 2147483647n;
}
const v46 = new F0();
class C50 {
    set c(a52) {
        Object.defineProperty(a52, a52, { configurable: true, enumerable: true, set: this });
        delete this[this];
        let v54 = v46[655];
        v54 = v54;
        new Date(65535);
        this[0] = v54;
    }
    g;
    static [1073741825] = 1n;
    3539 = C50;
    f = 1073741825;
}
const v56 = new C50();
new C50();
new C50();
function f59(a60, a61, a62) {
    for (let v63 = 0; v63 < 32; v63++) {
        Date["p" | v63] = v63;
    }
    return a61;
}
f59(v56, C50, C50)[1073741824];
