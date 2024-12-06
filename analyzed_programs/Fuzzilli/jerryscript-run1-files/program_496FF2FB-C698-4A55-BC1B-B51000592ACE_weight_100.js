const v0 = [5.962492541998898,4.834787816643038];
const v1 = [-2.2250738585072014e-308,684.1442860471636,882808.2765546613,0.0,5.0,51588.65194457979,108.73778831850359,0.1884309700158927];
const v2 = [404642.6692404961,0.5839398189074158,-696451.7992591632];
const v6 = [8];
const v7 = [v2,v6,v1];
const v8 = [v2,v2,v1];
class C9 {
    n(a11, a12, a13, a14) {
        const v15 = a14 && this;
        let {"a":v16,"d":v17,"length":v18,} = v6;
        try { a11(v16, v18, v15, v1, v17); } catch (e) {}
        return v17;
    }
    c = v0;
    #f;
    d;
    static f = v6;
}
new C9();
new C9();
const v22 = new C9();
v1.__proto__ = v22;
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a25;
    this.e = v0;
}
new F23(v8, v7, -4);
new F23(v0, v8, -4);
new F23(v0, v2, 268435440);
F23 >>> v1;
268435440 >>> v6;
