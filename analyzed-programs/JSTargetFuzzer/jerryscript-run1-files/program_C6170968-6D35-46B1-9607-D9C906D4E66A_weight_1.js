class C6 {
    static f;
    g;
    #p(a8, a9) {
        this[163];
        let v11;
        try { v11 = this.valueOf(this, a9, -4294967296, 127n); } catch (e) {}
        v11[1073741824n] += a9;
        return v11;
    }
    static #g;
    #h;
    9 = -4294967296;
    h = 127n;
    static [36418n];
    static #e;
}
const v13 = new C6();
const v14 = new C6();
const v15 = new C6();
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a19;
    this.h = v13;
    this.g = a20;
}
const v21 = new F16(-4294967296, 127n, 127n);
new F16(v21, 1073741824n, v21);
const v23 = new F16(v21, 36418n, C6);
class C24 {
    static m(a26, a27) {
        function F28(a30, a31, a32, a33) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = this;
            this.f = a30;
            this.c = a33;
        }
        const v34 = new F28(a26, 1073741825, v23, 1073741824n);
        const v35 = new F28(a26, v34, v21, 36418n);
        new F28(a26, v35, v14, a27);
        return 1073741825;
    }
    g = 1073741824n;
    [F16] = F16;
    [v21] = -4294967296;
    f = F16;
}
const v37 = new C24();
new C24();
const v39 = new C24();
function f40(a41, a42, a43) {
    const o44 = {
        8: 1073741824n,
        __proto__: v13,
        1000: v39,
        [C6]: v15,
    };
    return o44;
}
f40(v37, 1073741825, 127n);
f40(v37, 1073741825, 1073741824n);
f40(v37, 102134439, 36418n);
