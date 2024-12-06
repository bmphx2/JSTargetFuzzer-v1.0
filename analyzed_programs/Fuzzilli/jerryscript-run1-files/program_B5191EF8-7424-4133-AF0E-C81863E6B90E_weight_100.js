class C6 {
    #b;
    static #h = 0;
    #n(a8, a9, a10, a11) {
        this[a11] = -1024;
        a8 = this;
        a8.__proto__ = a8;
        this * -65536;
        return a9;
    }
    #c = -1024;
}
const v13 = new C6();
const v14 = new C6();
const v15 = new C6();
const v17 = v14 == v13 ? v14 : v13;
let v18;
try {
const t0 = 536870887;
v18 = t0(v13, -1024, C6, 536870888);
} catch (e) {}
const v19 = delete C6?.e;
const v21 = Symbol.replace;
v19[v21] = v21;
v21.f = v14;
Object.defineProperty(v15, v13, { configurable: true, enumerable: true, value: v21 });
try { v18(-1024, v17); } catch (e) {}
