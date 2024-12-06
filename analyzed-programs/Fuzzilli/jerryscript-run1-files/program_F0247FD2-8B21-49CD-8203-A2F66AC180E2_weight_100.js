function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1073741824;
    this.a = 1073741824;
}
new F0();
const v4 = new F0();
new F0();
class C9 extends F0 {
    static {
        this[this] = this;
        function F11(a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = F0;
            this.c = a13;
            this.b = a13;
        }
        const v15 = new F11(this, 11);
        const v16 = new F11(v15, 127);
        new F11(v16, 127);
    }
}
new C9();
const v19 = new C9();
const v20 = new C9();
const v21 = new F0();
for (let v22 = 0; v22 < 32; v22++) {
    v21["p" + v22] = v22;
}
let v25;
try { v25 = v20.valueOf(v19, v4, v19); } catch (e) {}
let v26;
try { v26 = v25(127); } catch (e) {}
v19.__proto__ = v21;
v26 >> C9;
