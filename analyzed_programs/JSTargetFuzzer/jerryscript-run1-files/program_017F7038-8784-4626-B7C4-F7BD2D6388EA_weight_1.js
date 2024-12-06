let v1 = 64;
class C3 {
    static get c() {
        v1 = this.__proto__;
        return C3;
    }
    n(a7, a8) {
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a7;
        }
        const v13 = new F9(F9, a7);
        const v14 = new F9(v13, this);
        new F9(v14, a8);
        return v13;
    }
}
const v16 = new C3();
new C3();
const v18 = new C3();
try {
    var h = v16;
} catch(e20) {
    try { e20(v1, v18, C3, ...-16); } catch (e) {}
}
Reflect.apply(([2.0,0.4010053167269092,3.0,0.0066823109481619625,798.2865441532322,Infinity,2.0]).slice, "-900241040");
