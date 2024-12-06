function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
}
const v12 = new F6(-237585590, -9223372036854775808, 129, 573618810);
const v13 = new F6(-9223372036854775808, v12, -237585590, 129);
new F6(-237585590, v13, -15, v12);
class C15 extends F6 {
    static #d = 129;
    #o(a17, a18, a19, a20) {
        const v21 = -15 & -237585590;
        function f22(a23, a24) {
            a18 <<= a24;
            v13.d = true;
            return v13;
        }
        f22(v21, -15);
        return 129;
    }
    #a = -237585590;
    [129] = 129;
}
let v27 = new C15();
new C15();
new C15();
let v30 = 0;
do {
    break;
    const v31 = -237585590 * F6;
    v27 = C15;
    try { v31(v12, 573618810, v31, v12, v12); } catch (e) {}
    v30++;
} while (v30 < 0)
