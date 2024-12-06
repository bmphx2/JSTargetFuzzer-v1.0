function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
    this.f = "object";
}
const v6 = new F3("valueOf");
const v7 = new F3(v6);
let v8 = v6 * v6;
v8++;
new F3(v7);
const v21 = ("-1604200484").replace;
try { new v21(); } catch (e) {}
