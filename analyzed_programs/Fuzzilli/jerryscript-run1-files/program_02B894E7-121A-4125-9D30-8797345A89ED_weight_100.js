function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 2147483648;
    this.b = 2147483648;
    this.h = 2147483648;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v4;
    this.d = 912583807;
}
const v13 = new F9(v5, v4);
new F9(v13, v4);
new F9(912583807, v3);
class C16 {
    [912583807] = F9;
    [859939104] = -268435456;
    static #d;
    #f;
}
new C16();
const v18 = new C16();
new C16();
let v22 = -5;
v22++;
~v18;
