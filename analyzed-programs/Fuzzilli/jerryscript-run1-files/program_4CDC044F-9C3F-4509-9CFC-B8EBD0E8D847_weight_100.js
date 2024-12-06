class C3 {
    e = 1385995473;
    static get g() {
        -498769.9416942635 * "toString";
        function F6(a8) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a8;
        }
        new F6(1385995473);
        new F6(1385995473);
        new F6(F6);
        return F6;
    }
}
const v12 = new C3();
const v13 = new C3();
const v14 = new C3();
function f18(a19, a20, a21) {
    const o22 = {
        "f": v12,
        "d": a20,
        ...v12,
    };
    return o22;
}
f18(f18(v13, v13, v14), v14, v13);
f18(14n, v14, v12);
