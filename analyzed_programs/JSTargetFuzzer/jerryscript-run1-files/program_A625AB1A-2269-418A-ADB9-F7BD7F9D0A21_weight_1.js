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
const v6 = new C1();
new C1();
const v8 = new C1();
v6.a = null;
const v9 = v8.f;
let v10;
try { v10 = v9(); } catch (e) {}
v10 = C1;
const v11 = new C1();
function f15(a16, a17, a18, a19) {
    const o30 = {
        "a": 1,
        set b(a21) {
            this[a21];
            Math.max(3);
            4294967296 * 3;
            ++a19;
        },
    };
    return o30;
}
const v31 = f15(C1, v11, -2, -2);
const v33 = f15(-63928, null, f15(v31, v31, -63928, -63928), -2, -63928);
function F34() {
    if (!new.target) { throw 'must be called with new'; }
}
const v36 = new F34(v33);
const v37 = [v11,F34];
const v38 = [v37,F34];
("1073741824").match(v38.copyWithin(v36, v37, v38));
