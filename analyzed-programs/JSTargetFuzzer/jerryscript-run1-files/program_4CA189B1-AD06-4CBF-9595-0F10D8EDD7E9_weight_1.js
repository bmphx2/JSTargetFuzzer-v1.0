new WeakSet();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a7.e = a7;
    this.c = -44859;
    this.f = WeakSet;
}
new F5(268435456, -4294967296);
new F5(-4294967296, -44859);
new F5(-44859, 268435456);
function f12() {
    return WeakSet;
}
const v13 = [-4294967295,288477491,127,-9,852620098,-5,-12,-2147483648];
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    new WeakSet([[v13,v13,v13,v13,v13],v13]);
}
new F14();
new F14();
new F14();
