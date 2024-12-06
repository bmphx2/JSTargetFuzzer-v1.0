function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 14;
}
new F0();
new F0();
new F0();
new Uint8ClampedArray(1564);
new Int8Array(122);
new Float32Array(9);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2147483647;
    this.a = 122;
}
new F15();
const v19 = new F15();
new F15();
let v23 = -18699;
new WeakMap();
const v29 = v23++;
let v30;
try { v30 = v19.p(v29, WeakMap); } catch (e) {}
[-1e-15,-1000000000.0,428.0824969867581,1.0,-2.220446049250313e-16,-1.0,-1000.0,0.12324916587929935,-1000000000.0,0.0];
[Infinity,-1000000000.0,1000.0,1e-15,-352735.33367409173];
[-4.0,6.91763360867516,3.0,-1000000000000.0,1000000000000.0,-1e-15];
2n > v29;
v30 ? 1073741824n : v29;
const v36 = 35041;
