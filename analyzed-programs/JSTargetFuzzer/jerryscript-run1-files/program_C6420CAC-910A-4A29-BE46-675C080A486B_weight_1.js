function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = this;
    this.a = -9223372036854775808;
}
new F3(F3, -9223372036854775808);
const v8 = new F3(24832, -128);
const v9 = new F3(F3, 24832);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
}
new F10(v8, v8);
new F10(v9, v8);
new F10(v8, v9);
class C17 {
    constructor(a19) {
        for (let [i24, i25] = (() => {
                new Uint8Array(this, a19, a19);
                return [0, 10];
            })();
            i24 < i25;
            i24++) {
        }
        try { new this(); } catch (e) {}
    }
}
new C17();
