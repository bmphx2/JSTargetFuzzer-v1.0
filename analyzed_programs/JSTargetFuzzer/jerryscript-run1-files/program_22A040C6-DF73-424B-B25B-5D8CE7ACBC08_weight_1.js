const v1 = new WeakSet();
const v2 = [v1];
const v3 = [v1,v2,v1,v1];
const v4 = [v3,WeakSet,WeakSet,v3,WeakSet];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a8;
    this.g = WeakSet;
    this.f = a7;
}
const v9 = new F5(v2, v4);
new F5(v4, v3);
new F5(v2, v3);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2147483647;
    this.a = v9;
}
new F18(F5, 1000, F5);
const v22 = new F18(v3, -16, 48752);
new F18();
let v26 = -18699;
new WeakMap();
const v32 = v26++;
let v33;
try { v33 = v22.p(v32, WeakMap); } catch (e) {}
[-1e-15,-1000000000.0,428.0824969867581,1.0,-2.220446049250313e-16,-1.0,-1000.0,0.12324916587929935,-1000000000.0,0.0];
[Infinity,-1000000000.0,1000.0,1e-15,-352735.33367409173];
[-4.0,6.91763360867516,3.0,-1000000000000.0,1000000000000.0,-1e-15];
2n > v32 ? 2n : v32;
const v39 = v33;
