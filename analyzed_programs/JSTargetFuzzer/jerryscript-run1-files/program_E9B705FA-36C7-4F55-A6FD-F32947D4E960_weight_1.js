class C1 {
    static toString() {
        for (let v3 = 0; v3 < 32; v3++) {
            this["function" + v3] = v3;
        }
        return null;
    }
    f = null;
    static 4 = null;
}
new C1();
const v7 = new C1();
const v8 = new C1();
function f12(a13, a14, a15, a16) {
    const o27 = {
        "a": 1,
        set b(a18) {
            this[a18];
            Math.max(3);
            4294967296 * 3;
            ++a16;
        },
    };
    return o27;
}
const v30 = f12(-63928, null, f12(f12(C1, v8, -2, -2), v7, -63928, -63928), -2, -63928);
function F31() {
    if (!new.target) { throw 'must be called with new'; }
}
const v33 = new F31(v30);
const v34 = [v33,F31];
const v35 = [v34,F31];
("1073741824").match(v35.copyWithin(v33, v34, v35));
