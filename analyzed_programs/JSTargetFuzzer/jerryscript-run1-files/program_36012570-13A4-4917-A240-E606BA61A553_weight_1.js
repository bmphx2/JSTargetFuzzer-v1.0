function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -4n;
}
const v13 = new F9(1435604208, -768858276);
const v14 = new F9(4096n, -2147483649);
new F9(v14, 1435604208);
v13.b >>= -768858276;
function f16(a17) {
    return a17;
}
class C18 extends f16 {
    #e = F9;
    #c = 129n;
    static f = 129n;
    #g;
    b = -768858276;
}
