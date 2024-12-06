function f0() {
}
let v4 = /[xyz{1,32}]/ugsi;
const v5 = /foo(?!bar)baz*/ugmi;
const v6 = /(\1a)[]ab|c+/vmsid;
function f7(a8, a9) {
    const o20 = {
        "c": a9,
        __proto__: a9,
        "b": v4,
        "h": v5,
        "e": 25379,
        [v6](a11, a12, a13, a14) {
            try { a11.compile(9007199254740990, a8, a11, this, ...a11); } catch (e) {}
            v4 = v6;
            try { a12(9007199254740990, a13, a14); } catch (e) {}
            return a9;
        },
    };
    return o20;
}
const v21 = f7(v6, v4);
const v22 = f7(v5, v6);
const v23 = f7(v6, v5);
class C24 {
    static #m(a26, a27, a28) {
        Math.sqrt(v6);
        const v33 = a27 | a27;
        Math.abs(a27);
        Math.random();
        v33 - a27;
        !4294967295;
        return v22;
    }
}
const v38 = new C24();
const v39 = new C24();
const v40 = new C24();
const v41 = +v39;
v40.valueOf = f7;
v6.toString = f0;
f0();
function F43(a45, a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a45;
}
new F43(25379, v23, C24);
new F43(v41, v22, v38);
new F43(25379, v21, v22);
