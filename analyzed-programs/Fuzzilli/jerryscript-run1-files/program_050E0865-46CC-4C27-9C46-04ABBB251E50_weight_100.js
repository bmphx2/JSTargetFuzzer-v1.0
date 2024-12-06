function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9223372036854775808;
}
new F0();
const v4 = new F0();
new F0();
class C6 extends F0 {
    valueOf(a8, a9) {
        let v10 = 0;
        while (v10 < 0) {
            v10++;
        }
        return this;
    }
}
new C6();
const v18 = new C6();
new C6();
v18.toString = v4;
for (const v26 of 16) {
    2.2250738585072014e-308 | 1073741823;
    const v32 = -2.2250738585072014e-308;
    !2.2250738585072014e-308;
    v26 + v32;
}
