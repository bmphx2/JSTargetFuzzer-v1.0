function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a6;
    this.b = a6;
    this.d = a5;
}
const v7 = new F3(9223372036854775807, -24442);
new F3(9223372036854775807, 9223372036854775807);
const v9 = new F3(-24442, 9223372036854775807);
class C10 {
    #p(a12, a13, a14) {
        function F15(a17, a18, a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a20;
        }
        new F15(16473, v9, a13, a14);
        new F15(-24442, this, -24442, a14);
        new F15(a13, v7, 16473, this);
        return F3;
    }
    570;
    [16473];
    static [16473] = 16473;
}
new C10();
let v25 = new C10();
new C10();
new Uint32Array(205);
new Float64Array(2);
new Int16Array(0);
v25 = C10;
