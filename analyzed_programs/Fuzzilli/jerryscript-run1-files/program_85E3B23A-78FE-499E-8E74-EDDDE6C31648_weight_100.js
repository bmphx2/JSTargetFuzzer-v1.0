const v0 = [];
const v2 = new Map();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 5.0;
    this.b = a12;
}
new F9(9, 7, 9);
new F9(-11, 9, 7);
new F9(-11, 9, 9);
const v17 = v0.constructor;
class C18 extends v17 {
    [5.0];
    g = v2;
    static 1 = F9;
}
const v19 = new C18();
let v20;
try { v20 = v17.toString(); } catch (e) {}
v20 >> C18;
v19.length = 1;
