const v0 = [129];
const v1 = [2];
const v2 = [9];
const v4 = new Set();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v1;
    this.g = v1;
    this.h = v1;
}
const v8 = new F5(v1);
const v9 = new F5(v0);
const v10 = new F5(v2);
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a15;
    this.d = a14;
}
new F11(v0, v1, v9, v8);
const v18 = new F11(v1, v2, v10, v10);
const v19 = new F11(v2, v1, v10, v8);
v18.e = v19;
let v20;
try { v20 = v9.o(v2, v4, v0, v18); } catch (e) {}
v1[v20] = v1;
v2.length ||= v20;
const v21 = F5 % v2;
class C22 extends F5 {
    [v2] = v20;
    #e = v21;
}
new C22();
new C22();
new C22();
