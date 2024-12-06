function f3() {
    return 1000000000000.0;
}
class C7 extends f3 {
    get e() {
        let v9 = 0;
        while (v9 < 3) {
            this.__proto__ = this;
            this[8] = this;
            v9++;
        }
        return this;
    }
    set d(a14) {
        for (let v15 = 0; v15 < 32; v15++) {
            C7["p" + v15] = v15;
        }
    }
}
new C7();
new C7();
new C7();
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
}
const v26 = new F22(F22, "bigint");
("bigint").match(v26);
