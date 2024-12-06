function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 25362;
    this.unscopables = 25362;
    this.h = 25362;
}
const v3 = new F0();
const v4 = new F0(F0, v3, v3);
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a11;
    this.b = a13;
    this.a = a11;
}
new F9(v4, "from", "undefined");
new F9(v4, "n", "undefined");
new F9(v5, "from", "n");
const o22 = {
    m(a19, a20, a21) {
        super.c = Date;
        return Date;
    },
};
Reflect.apply(o22.m);
