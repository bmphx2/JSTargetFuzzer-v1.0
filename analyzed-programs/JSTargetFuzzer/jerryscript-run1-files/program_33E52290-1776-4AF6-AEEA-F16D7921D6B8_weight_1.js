function f0() {
}
function f1() {
    return f0;
}
const v2 = [f1,f1];
const v3 = [v2];
const v4 = [v3,f0,v3,f0,f0];
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v2;
    this.g = v4;
}
new F5(v4);
new F5(f1);
new F5(v2);
class C14 {
    static #p(a16, a17) {
        let v21 = 16 + 847835456;
        let v22 = ++v21;
        const v23 = --v22;
        16 ^ 847835456;
        return v23;
    }
    static #c = v2;
    g;
    e;
}
new C14();
new C14();
const v27 = new C14();
Object.defineProperty(v27, "f", { configurable: true, get: f0 });
for (const v28 of v4) {
    let v29 = 0;
    do {
        !v28;
        v29++;
    } while (v29 < 7)
}
