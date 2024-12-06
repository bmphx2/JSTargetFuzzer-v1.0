function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 10000;
    this.c = 10000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    valueOf(a8, a9) {
        new F0();
        return this;
    }
    static #c;
    static #valueOf(a12) {
        function f13(a14) {
            return F0;
        }
        class C15 extends f13 {
            [v4] = a12;
            static [this] = a12;
            [v5] = f13;
        }
        return v3;
    }
}
const v16 = new C6();
const v17 = new C6();
const v18 = new C6();
const v22 = [1000000000000.0,1.472216801914597e+308,-260200.7498754455];
[1.1451366719808446e+308,1000000000.0,-221074.72946135222,24156.77779525821,0.8859576893916088,-0.0];
[71066.17377024889,-8.685025580780616e+307,6.54403676535789e+307,0.4627110873769398,0.3396840584518127];
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a27;
    this.b = a28;
    this.e = v3;
}
new F25(v17, "-620126866");
const v30 = new F25(v16, v18);
new F25(v4, v30);
v18[7] |= v22;
