new Int8Array(1067);
new BigInt64Array(3);
new Uint32Array(4);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2147483647;
    function F16(a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v20 = new F16();
    const v22 = new Uint32Array();
    try { v22.set(v20, -9007199254740991); } catch (e) {}
    const v27 = new BigInt64Array([-6n]);
    for (const v28 of v27) {
    }
    this.a = 2147483647;
}
new F12();
const v30 = new F12();
new F12();
let v34 = -18699;
new WeakMap();
const v40 = v34++;
let v41;
try { v41 = v30.p(v40, WeakMap); } catch (e) {}
[-1e-15,-1000000000.0,428.0824969867581,1.0,-2.220446049250313e-16,-1.0,-1000.0,0.12324916587929935,-1000000000.0,0.0];
[Infinity,-1000000000.0,1000.0,1e-15,-352735.33367409173];
[-4.0,6.91763360867516,3.0,-1000000000000.0,1000000000000.0,-1e-15];
2n > v40 ? 2n : v40;
const v47 = v41;
