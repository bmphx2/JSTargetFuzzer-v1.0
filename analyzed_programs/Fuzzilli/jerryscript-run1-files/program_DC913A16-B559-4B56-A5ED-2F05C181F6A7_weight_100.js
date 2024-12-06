function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = "o";
}
const v7 = new F3("o", "undefined");
const v8 = new F3("4Q", "4Q");
new F3("4Q", "o");
class C10 extends F3 {
    #n(a12, a13, a14, a15) {
        super.b = v8;
        for (let v16 = 0; v16 < 59; v16++) {
            try {
                ("undefined").#n(a13, v16, this, "undefined");
            } catch(e18) {
            }
        }
        return a15;
    }
    static 7 = "4Q";
    2928 = "4Q";
}
new C10();
new C10();
new C10();
let v25 = 0;
do {
    Object.defineProperty(v7, "f", { value: v7 });
    const t27 = "o";
    t27.c = "o";
    C10[Symbol.isConcatSpreadable];
    v25++;
} while (v25 < 6)
