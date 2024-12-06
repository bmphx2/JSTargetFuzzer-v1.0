function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1;
    this.g = 1;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
class C6 {
    static 6;
    static n(a8, a9) {
        v5--;
        v3.g;
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a14;
            this.a = a14;
            this.e = a9;
        }
        const v16 = new F12(F12, v3);
        const v17 = new F12(this, a9);
        new F12(v16, v4);
        return v17;
    }
}
new C6();
let v20 = new C6();
const v21 = new C6();
const o25 = {
    [C6]: F0,
    "d": C6,
    "e": v4,
};
if (v5) {
    for (let v26 = 0; v26 < 32; v26++) {
        o25["p" + v26] = v26;
    }
} else {
    v20 %= v4;
    [v21];
}
