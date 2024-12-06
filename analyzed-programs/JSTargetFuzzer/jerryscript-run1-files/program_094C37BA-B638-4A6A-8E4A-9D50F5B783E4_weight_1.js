function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.g = 8064;
}
const v7 = new F3(-4294967295, 2040995572);
const v8 = new F3(v7, 8064);
const v9 = new F3(v8, 2040995572);
class C10 extends F3 {
    constructor(a12, a13) {
        super(v9, 8064);
        v9[Symbol.unscopables];
    }
    static m(a18, a19, a20) {
        const v22 = Symbol.species;
        this[v9] = 2040995572;
        return v22.__proto__;
    }
}
new C10(2040995572, v8);
new C10(2040995572, C10);
new C10(2040995572, v8);
(-1.0 ^ 2040995572) * -4.473924600681509;
