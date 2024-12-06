function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = true;
    this.d = true;
    this.e = true;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v6 = [v3,v3,F1];
const v7 = [v3,v4,v6,v6,v6];
const v8 = [v4];
class C9 {
    static a = v3;
    e = v7;
    set a(a11) {
        let v10 = this;
        v10[v10];
        try { v7.unshift(v8); } catch (e) {}
        v7.__proto__ = v10;
        v10 = v3;
        function f14() {
            return v6;
        }
    }
    10;
    d = true;
    static e = v8;
    a = v8;
}
const v15 = new C9();
const v16 = new C9();
const v17 = new C9(v8, v4, F1);
function f18(a19, a20, a21) {
    const o28 = {
        "c": v4,
        [v15]: a19,
        [a19]: a19,
        "f": v7,
        set g(a23) {
            const t40 = "NY";
            t40[8] = "NY";
        },
        "g": v3,
        "e": a19,
        [a21]: C9,
        "b": v3,
    };
    return o28;
}
f18(v5, v15, f18);
f18(v3, v16, v7);
f18(v3, v15, v17);
const v34 = Array(257);
v34.includes(v34, 257);
("42655").trimRight();
