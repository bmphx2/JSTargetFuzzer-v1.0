class C3 {
    static [127] = -24307;
    static set d(a5) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a9;
        }
        new F6(127, 50686);
        new F6(-24307, 127);
        new F6(a5, 50686);
    }
    static #d = 127;
    [127];
    static g = -24307;
    3 = 127;
}
const v13 = new C3();
const v14 = new C3();
const v15 = new C3();
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = C3;
    this.g = v15;
}
let v26 = new F20(v15, -2147483649, -2147483649, v14);
new F20(v26, C3, -29325, v26);
const v28 = new F20(v15, v13, -2147483649, v26);
let v29;
try {
const t0 = -24307;
v29 = t0(v13, v28, v28, -29325);
} catch (e) {}
!v13;
v26 = v14;
v28.valueOf = v29;
let v31 = 0;
while (v31 < 5) {
    v31++;
}
