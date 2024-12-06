function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 32339;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v9 = new F0(Infinity, Infinity, F0);
for (let v10 = 0; v10 < 32; v10++) {
    "p" + v10;
    v9[Infinity] = v10;
}
const v19 = [];
function f20() {
    Object.defineProperty(v19, "d", { value: 1e-15 });
    return 1e-15;
}
class C22 extends F0 {
    1000 = v3;
}
new C22();
new C22();
new C22();
f20(v5, v4);
f20();
