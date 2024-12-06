function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -63589;
    this.g = -63589;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    static 8;
    constructor(a8, a9) {
        super();
        const v11 = Symbol.unscopables;
        v4[v11] = v11;
    }
    set b(a13) {
        const v14 = this & a13;
        try {
            super.min(v5, v14);
        } catch(e16) {
        }
    }
}
const v17 = new C6(v3, v3);
const v18 = new C6(v17, v3);
let v19 = new C6(v18, v18);
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a28;
    this.d = 10;
    this.f = a26;
}
new F23(v4, v4, 536870889, v5);
new F23(v4, v18, 65535, v18);
const v31 = new F23(v5, v18, 536870889, v3);
try { v31.p(65535, F0, v4, v31); } catch (e) {}
let v36 = ++v19;
Math.clz32(v4);
const v38 = 0.0 << 0.0;
-v19;
v36--;
Math.sqrt(v38);
Math.asin(26268);
