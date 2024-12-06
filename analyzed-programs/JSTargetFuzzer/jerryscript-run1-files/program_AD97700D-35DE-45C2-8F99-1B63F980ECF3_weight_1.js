function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 65537;
    this.a = 65537;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = [v5,v5];
v5.g;
const o9 = {
};
new Proxy(v7, o9);
const v13 = [v4,[v7],v4];
class C15 extends F0 {
    c;
    static h;
}
new C15();
new C15();
new C15();
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a23;
}
new F21(v4, 8.390236212424277);
new F21(v13, 4.505575167996501);
new F21(-3.680437571985647e+306, 4.505575167996501);
try { Symbol.keyFor(Symbol); } catch (e) {}
