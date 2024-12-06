new Set();
new WeakMap();
new Float64Array(7);
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    function f12(a13) {
        try { new a13(); } catch (e) {}
        return a13;
    }
    f12(F10);
}
new F10();
new Float32Array(39);
new Float32Array(490);
const v24 = new Int16Array();
v24[-583.1760893759623];
