new WeakSet();
const v6 = new Date();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a10.e = 64;
}
new F7(v6, 64);
new F7(WeakSet, 1856584689);
new F7(WeakSet, 1856584689);
function f17(a18, a19, a20) {
    return a18;
}
class C21 extends f17 {
}
try { C21(); } catch (e) {}
