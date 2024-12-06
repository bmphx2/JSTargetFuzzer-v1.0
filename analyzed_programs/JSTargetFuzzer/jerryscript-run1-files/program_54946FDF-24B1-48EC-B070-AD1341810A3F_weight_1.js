const v1 = new Set();
class C2 extends Set {
    static #h = v1;
    static o(a4, a5) {
        let [v6] = v1;
        class C7 extends Set {
            static #e = a5;
            static a = a4;
            static 1488 = this;
        }
        const v8 = new C7();
        new C7();
        new C7();
        return v8;
    }
}
const v11 = new C2();
const v12 = new C2();
const v13 = new C2();
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a19;
    this.a = 2147483648n;
}
new F17(v12, 6n);
const v22 = new F17(v11, -9007199254740990n);
const v23 = new F17(v13, 2147483648n);
let v24;
try { v24 = v23(v13); } catch (e) {}
v22.length = 1;
v1.size >>>= v24;
for (let v26 of v1) {
    ++v26;
    -27934 && -14;
    -14 * Set;
}
