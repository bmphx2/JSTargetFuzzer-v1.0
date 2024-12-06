function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 11;
    this.g = 11;
}
const v3 = new F0();
new F0();
const v5 = new F0();
let v7 = 1;
class C9 {
    static toString(a11, a12, a13) {
        super.e = this;
        return a11;
    }
    2491;
    valueOf(a15, a16, a17, a18) {
        +v3;
        v7 = a15;
        return this;
    }
}
new C9();
const v24 = new C9();
new C9();
let v26 = 0;
while (v26 < 5) {
    v5[0] = v7;
    const v29 = v24 ** F0;
    function f30() {
        return v29;
    }
    v26++;
}
