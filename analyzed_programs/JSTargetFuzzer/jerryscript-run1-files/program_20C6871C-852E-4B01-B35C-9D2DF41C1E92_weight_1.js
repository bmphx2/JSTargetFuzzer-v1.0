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
            const v17 = "p" + v15;
            const t15 = [12,-21512,2,-1813041490];
            t15.length = 12;
            C7[v17] = v15;
        }
    }
}
new C7();
new C7();
new C7();
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
}
const v28 = new F24(F24, "bigint");
("bigint").match(v28);
