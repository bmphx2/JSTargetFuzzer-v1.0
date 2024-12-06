function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -536870912;
}
new F0();
const v4 = new F0();
let v5 = new F0();
class C9 extends F0 {
    [v4];
    static {
        -26168 - -4294967297;
    }
    ["8K"] = "-2";
    static #b;
    static 2879674142 = v4;
    static #c;
    static #f;
}
new C9();
new C9();
const v18 = new C9();
for (let i23 = 0; i23 < 0; i23++) {
    const v29 = C9[i23];
    v29?.[v18];
    v5 |= v29;
}
