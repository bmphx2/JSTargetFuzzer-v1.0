function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -268435456;
    this.c = -268435456;
}
const v3 = new F0();
new F0();
new F0();
class C9 {
    n(a11, a12, a13, a14) {
        let v15;
        try { v15 = v3.preventExtensions(a13, a12, 5n); } catch (e) {}
        a14.a;
        let v18 = 563925103;
        Math.tan(this);
        Math.atan(v18);
        +v15;
        this * v18;
        --v15;
        ++v18;
        return 9007199254740990n;
    }
}
new C9();
new C9();
new C9();
2 != -1000000.0;
for (let v31 = 0; v31 < 5; v31++) {
    const v32 = [-1.7976931348623157e+308,NaN,4.0,-3.0,0.7202116682743733,0.10722414533286673];
    const v34 = ([-1e-15,0.786904425348982,1000000000.0])[v32];
    const v36 = new Uint8ClampedArray();
    function f37(a38) {
        return v34;
    }
    v36 | f37;
    v31 !== v31;
}
