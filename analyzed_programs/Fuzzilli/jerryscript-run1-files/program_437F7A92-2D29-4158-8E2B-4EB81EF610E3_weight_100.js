function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    this.h = "object";
}
const v6 = new F3("object");
new F3("object");
const v8 = new F3(F3);
class C9 extends F3 {
    [v6] = v8;
    get c() {
        try {
            super.h;
        } catch(e12) {
        } finally {
            "object" instanceof F3;
        }
        return this;
    }
}
new C9();
new C9();
new C9();
let v20 = 0;
do {
    const v21 = new C9();
    v21[Symbol.species];
    v20++;
} while (v20 < 2)
