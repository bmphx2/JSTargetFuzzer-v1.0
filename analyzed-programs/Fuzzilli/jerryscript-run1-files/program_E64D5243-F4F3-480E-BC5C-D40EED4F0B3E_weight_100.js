function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 9;
    this.a = 128;
}
const v6 = new F3(-128);
const v7 = new F3(-128);
const v8 = new F3(-128);
class C12 extends F3 {
    set f(a14) {
        for (let v15 = 0; v15 < 32; v15++) {
            this["p" + v15] = v15;
        }
    }
    static f = -536870912n;
    0;
    static #d = v8;
    static [v7];
    2686112996 = v8;
    static [v6] = -128;
}
new C12();
new C12();
new C12();
let v21 = 0;
do {
    try { F3(v21); } catch (e) {}
    v21++;
} while (v21 < 5)
