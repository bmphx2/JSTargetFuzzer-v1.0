function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 512;
}
const v11 = new F6(-65537, 1, F6);
const v12 = new F6(-65537, -1073741824, 512);
const v13 = new F6(1, -1073741824, 268435440);
function f14() {
    return v13;
}
v12[5] >>= 9007199254740990;
v11[536870912] /= -1073741824;
class C18 {
    d;
    f = v13;
    static [9007199254740990] = 268435440;
    b = f14;
}
new C18();
new C18();
new C18();
