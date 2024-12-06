function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = this;
    function F7(a9) {
        if (!new.target) { throw 'must be called with new'; }
        Symbol();
    }
    new F7(F7);
    this.a = -9223372036854775808;
}
new F3(F3, -9223372036854775808);
const v14 = new F3(24832, -128);
const v15 = new F3(F3, 24832);
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a19;
}
new F16(v14, v14);
new F16(v15, v14);
new F16(v14, v15);
class C23 {
    constructor(a25) {
        for (let [i30, i31] = (() => {
                new Uint8Array(this, a25, a25);
                return [0, 10];
            })();
            i30 < i31;
            i30++) {
        }
        try { new this(); } catch (e) {}
    }
}
new C23();
