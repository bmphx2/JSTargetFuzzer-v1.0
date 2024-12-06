function f0() {
}
class C1 {
    static set a(a3) {
        Object.defineProperty(a3, "c", { writable: true, get: f0, set: f0 });
        try {
            super.setFloat64(a3, a3, f0, this, this);
        } catch(e5) {
        }
    }
    #e = f0;
    g = f0;
    static f;
}
new C1();
const v7 = new C1();
new C1();
new Set();
const o14 = {
};
const v16 = new Proxy(C1, o14);
v16[64] = v7;
let v18 = 4096;
const v19 = ~Set;
Math.log10(v19);
Math.cosh(v19);
++v18;
