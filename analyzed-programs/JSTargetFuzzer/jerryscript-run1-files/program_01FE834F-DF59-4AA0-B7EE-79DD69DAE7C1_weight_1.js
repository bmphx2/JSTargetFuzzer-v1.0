function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 4294967296;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0(v3, v4, v3);
class C6 extends F0 {
    constructor(a8, a9) {
        super();
        const o12 = {
            "unscopables": a8,
        };
        const v14 = new ArrayBuffer(16, o12, v5, v5);
        new Uint16Array(v14, v5, v14);
    }
}
new C6(C6, v5);
const v18 = new C6(v4, F0, v3, v4);
new C6(v18, C6);
function f23(a24, a25) {
    return a24;
}
([5.409837218751631e+306,5.0,0.631320185332836,-1.0,-697.5426783793084,-235222.86486059672,0.06240438650725588,-2.0,0.3995307120555006,2.2250738585072014e-308]).filter(f23);
