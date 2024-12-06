function f0() {
}
const v1 = [f0,f0];
const v2 = [f0,f0,f0];
[f0];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = null;
}
new F5(v1, v1);
new F5(v2, v1);
const v11 = new F5(v1, v2);
const v14 = new Array(185);
class C16 extends v14.constructor {
    static c = v1;
    static [Array];
    static [v1] = v14;
}
const v17 = new C16();
v11.__proto__ = v17;
