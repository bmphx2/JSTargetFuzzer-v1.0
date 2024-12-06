const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v0;
    this.g = v0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v6 = [v0,v5,v3];
const v7 = [v0,v6];
const v8 = [v0,v6,v0,v0,F1];
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a13;
    this.g = v4;
    this.a = a12;
}
new F9(v4, v5, v6);
new F9(v4, v7, v8);
new F9(v3, F1, v0);
class C17 {
    constructor(a19, a20) {
    }
}
try { C17(C17, C17); } catch (e) {}
