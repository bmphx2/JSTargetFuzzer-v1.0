const v8 = new Float64Array(1024);
new Uint32Array(3);
new Int8Array(1000);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    v8.g = 2147483647;
    this.a = 2147483647;
}
new F15();
const v19 = new F15();
new F15();
let v23 = -18699;
new WeakMap();
const v29 = v23++;
try { v19.p(v29, WeakMap); } catch (e) {}
const v31 = [-1e-15,-1000000000.0,428.0824969867581,1.0,-2.220446049250313e-16,-1.0,-1000.0,0.12324916587929935,-1000000000.0,0.0];
[Infinity,-1000000000.0,1000.0,1e-15,-352735.33367409173];
[-4.0,6.91763360867516,3.0,-1000000000000.0,1000000000000.0,-1e-15];
1073741824n > v29 ? 2n : v29;
const v36 = v31;
