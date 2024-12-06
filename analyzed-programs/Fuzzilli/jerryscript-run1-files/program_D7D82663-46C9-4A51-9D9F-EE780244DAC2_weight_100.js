function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -65536;
    this.f = -65536;
}
const v3 = new F0();
new F0();
new F0();
class C15 {
    static [477876341];
    static #f = v3;
    #h;
    b = "c";
}
new C15();
const v17 = new C15();
new C15();
v17 >> v17;
