function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 58393;
}
new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    d;
    valueOf(a8, a9) {
        const o10 = {
        };
        new Proxy(a8, o10);
        return 58443;
    }
}
const v16 = new C6();
9007199254740991 % C6;
const v19 = [9007199254740990];
const o20 = {
    __proto__: v19,
};
new C6();
const v22 = new C6();
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a26;
    this.g = F0;
    this.h = a26;
}
new F23(v22, v16, v5);
new F23(v16, v16, v4);
new F23(C6, v16, v4);
RangeError();
