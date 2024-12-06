class C1 {
    o() {
        return false;
    }
    [-1] = false;
    2 = false;
    static [false];
    a;
    1;
    [false];
}
const v6 = new C1();
const v7 = new C1();
new C1();
class C15 {
    #a = 4096;
    [4096];
    static {
        new Map();
        try {
            C1.#a;
        } catch(e20) {
        }
    }
    #d;
    [v6] = v7;
}
const v21 = new C15();
new C15();
const v23 = new C15();
try { new C1(6, ...v21, v23, 4096, v23, 6); } catch (e) {}
const v29 = Symbol.toPrimitive;
const o34 = {
    [v29]() {
        this.g = this;
        this[Symbol.toPrimitive];
        return 6;
    },
};
