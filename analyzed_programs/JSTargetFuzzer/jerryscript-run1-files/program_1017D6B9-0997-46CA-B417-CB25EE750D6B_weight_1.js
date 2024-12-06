function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4096;
}
const v3 = new F0();
new F0();
const v6 = [0,-464147500,1074054361,-11,44427,-14698,7,127];
try {
    v6.length = -2;
} catch(e7) {
}
const v8 = new F0();
[[v3],v8];
[F0];
function f18(a19, a20, a21) {
    return a21;
}
class C22 extends f18 {
}
try { C22(); } catch (e) {}
