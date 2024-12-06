const v1 = new WeakSet();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a4;
}
new F2(v1);
const v6 = new F2(WeakSet);
new F2(v6);
const v8 = [3,65537,-11,9223372036854775807,-64104,825904537,4294967296,-65536,52546,13];
[536870888,1024,5813,6,6,-4294967296,1909277666,-5645];
[53076,-2,1131210560];
try { v8.reduce(536870887n); } catch (e) {}
function f15() {
    return F2;
}
function f16() {
    return WeakSet;
}
const v18 = new WeakMap();
function f19() {
    return v18;
}
