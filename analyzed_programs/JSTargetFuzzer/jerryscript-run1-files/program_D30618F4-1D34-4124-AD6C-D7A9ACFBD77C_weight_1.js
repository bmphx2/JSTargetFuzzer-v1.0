function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = "MAX_VALUE";
}
new F3("f", "f");
new F3("toString", "MAX_VALUE");
new F3("f", "MAX_VALUE");
const v17 = [Infinity];
const v18 = [-9.40814191403733];
class C19 extends Date {
    constructor(a21, a22) {
        super(F3);
    }
}
new C19(v17, v18);
