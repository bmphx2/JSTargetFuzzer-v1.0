function f0() {
}
class C1 {
    constructor() {
        Object.defineProperty(this, 10, { writable: true, configurable: true, enumerable: true, set: f0 });
        f0 instanceof f0;
        super.h;
    }
    #m() {
        f0();
        return this;
    }
    [f0] = f0;
    c;
}
const v7 = new C1();
const v8 = new C1();
let v9 = new C1();
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a13;
    this.g = a13;
    this.b = a12;
}
const v14 = new F10(v7, v7);
const v15 = new F10(v7, v9);
const v16 = new F10(C1, v8);
class C17 extends f0 {
    #b;
    static get h() {
        try {
            v16.#b = v7;
        } catch(e19) {
        }
        return v16;
    }
    1000;
    d;
    static c = v15;
}
new C17();
let v21 = new C17();
new C17();
Math.sign(v9);
Math.log10(v21);
v9 >>> v21++;
Math.acosh(3809);
v9--;
delete v14?.g;
