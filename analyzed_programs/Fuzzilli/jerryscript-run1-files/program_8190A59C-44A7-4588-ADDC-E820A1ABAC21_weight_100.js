function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 257;
    this.d = 257;
    this.g = 257;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    8;
    static get d() {
        function f8() {
            return this;
        }
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a11;
            this.h = this;
            this.b = a14;
        }
        new F9(v3, v5, this, v5);
        new F9(this, this, this, v3);
        new F9(v5, v5, v3, this);
        return v5;
    }
}
const v18 = new C6();
new C6();
const v20 = new C6();
[v18,[[F0,v20,C6,v5,v20],v3]];
const v29 = new Set();
let v30 = 10;
for (; v30--;) {
    v30 >>> v4;
    let v34 = -13;
    const v35 = v29 && v34;
    Math.min(v34);
    --v34;
    Math.atan(v35);
    +v29;
}
