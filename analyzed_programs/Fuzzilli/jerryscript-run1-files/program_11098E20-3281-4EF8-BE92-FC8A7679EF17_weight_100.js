let v0 = 15;
class C3 {
    constructor(a5, a6) {
        let v7;
        try { v7 = a6(a6, -268435456, a5); } catch (e) {}
        v7?.[v0];
    }
    #d;
    toString(a10, a11) {
        v0 -= a10;
        try {
            this.#d;
        } catch(e13) {
        }
        return this;
    }
}
const v14 = new C3(-268435456, -268435456);
const v15 = new C3(-268435456, v0);
const v16 = new C3(v0, v0);
class C20 extends C3 {
    3 = C3;
}
const v21 = new C20();
new C20();
const v23 = new C20();
v23.__proto__ = v15;
v21[8] = v21;
v14[268435441] = v16;
new C20();
