function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -16;
    this.e = -16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C9 extends F0 {
    c = v4;
    e = v4;
    9 = 2786;
    static n(a11, a12, a13) {
        function f14(a15) {
            return a15;
        }
        class C16 extends f14 {
            static [a13] = a12;
            static #g = this;
            static [a12];
        }
        return a12;
    }
    0;
}
const v17 = new C9();
new C9();
new C9();
const v21 = [true,v4];
const v22 = [-2147483647,v3];
const v23 = [F0,-1538301775,v5,v4,v3];
let v24 = v17 << v22;
v24 /= v24;
v17[C9] **= v24;
const o25 = {
    __proto__: v3,
    "e": v5,
    "g": 2786,
};
v22 % v22;
v21[13] = v23;
