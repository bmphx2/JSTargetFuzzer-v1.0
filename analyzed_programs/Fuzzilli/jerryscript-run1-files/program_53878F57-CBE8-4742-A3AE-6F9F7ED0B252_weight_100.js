function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 65536;
    this.e = 65536;
    this.b = 65536;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    #m(a8, a9) {
        super.d = a9;
        try {
            super.padEnd(a8, v5, v3, a8);
        } catch(e11) {
        }
        return a8;
    }
    static #b;
    #h;
    #valueOf(a13, a14) {
        try { F0(); } catch (e) {}
        for (let v16 = 0; v16 < 32; v16++) {
            a13["p" + v16] = v16;
        }
        return a13;
    }
}
const v19 = new C6();
const v20 = new C6();
const v21 = new C6();
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v4;
    this.g = a25;
}
const v26 = new F22(v19, v4);
new F22(C6, v26);
const v28 = new F22(v5, v20);
function F36(a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v4;
    this.h = v3;
    this.g = v21;
}
new F36(C6, 129, v5);
new F36(v28, -1999663122, v28);
new F36(v28, 129, null);
