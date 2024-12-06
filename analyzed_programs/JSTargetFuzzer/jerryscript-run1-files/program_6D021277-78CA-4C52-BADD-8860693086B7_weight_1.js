function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -256;
    this.c = -256;
    F0.d = -256;
}
new F0();
new F0();
new F0();
new Int8Array(128);
new Uint8Array(10);
new Float64Array(2);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2147483647;
    this.a = 2147483647;
}
let v21 = new F18();
const v22 = new F18();
new F18();
new WeakMap();
const v32 = v21++;
let v33;
try { v33 = v22.p(v32, WeakMap); } catch (e) {}
[-1e-15,-1000000000.0,428.0824969867581,1.0,-2.220446049250313e-16,-1.0,-1000.0,0.12324916587929935,-1000000000.0,0.0];
[Infinity,-1000000000.0,1000.0,1e-15,-352735.33367409173];
[-4.0,6.91763360867516,3.0,-1000000000000.0,1000000000000.0,-1e-15];
2n > v32 ? 2n : v32;
const v39 = v33;
