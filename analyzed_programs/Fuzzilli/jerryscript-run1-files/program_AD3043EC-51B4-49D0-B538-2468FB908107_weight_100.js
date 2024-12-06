class C3 {
    set f(a5) {
        this[Symbol.toPrimitive] = this;
    }
    get h() {
        let v9 = 0;
        while (v9 < 8) {
            function F12(a14) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a14;
                this.c = -218.1752125409855;
            }
            new F12(F12);
            new F12(-4.0);
            new F12(F12);
            v9++;
        }
        return this;
    }
}
const v19 = new C3();
let v20 = new C3();
const v21 = new C3();
const v25 = -4.0 ^ -4.0;
const v26 = new C3();
v20 ||= v20;
const v28 = Symbol.replace;
v26[v28];
try { v21.valueOf(v21, v25, -218.1752125409855); } catch (e) {}
Object.defineProperty(v19, -2.2250738585072014e-308, { writable: true, enumerable: true, value: v26 });
v28[v28] = v21;
-47.66910027298502 in v26;
