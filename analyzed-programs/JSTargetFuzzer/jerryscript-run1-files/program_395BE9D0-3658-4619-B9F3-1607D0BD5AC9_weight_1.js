function f3() {
    return 23709n;
}
class C10 extends f3 {
    static 6;
}
const v11 = new C10();
const v12 = new C10();
let v13 = new C10();
function F14(a16) {
    if (!new.target) { throw 'must be called with new'; }
}
v13 = v11;
v12.e = C10;
v11.f = F14;
v13[5.0] = f3;
f3();
switch (8) {
    case F14:
        break;
    default:
        break;
}
