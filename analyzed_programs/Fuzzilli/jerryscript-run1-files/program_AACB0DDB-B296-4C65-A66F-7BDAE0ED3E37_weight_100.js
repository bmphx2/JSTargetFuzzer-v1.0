const v8 = new Float64Array(186);
with (v8) {
    new Set();
}
new Uint16Array(512);
new Int16Array(64);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
}
class C20 extends F18 {
    constructor(a22, a23) {
        super();
    }
}
new C20(F18, F18);
Math.clz32();
