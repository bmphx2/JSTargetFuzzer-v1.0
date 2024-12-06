const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v0;
    this.c = v0;
    this.f = v0;
}
new F1();
new F1();
const v5 = new F1();
new WeakMap();
class C10 extends F1 {
    h = v5;
    d = WeakMap;
}
new C10();
new C10();
new C10();
([[]])["unshift"]();
