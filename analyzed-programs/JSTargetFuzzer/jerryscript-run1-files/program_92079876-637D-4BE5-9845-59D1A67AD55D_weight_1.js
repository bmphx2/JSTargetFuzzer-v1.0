function f0() {
}
class C1 extends f0 {
    static {
        Object.defineProperty(this, "d", { writable: true, configurable: true, enumerable: true, value: this });
        const v3 = this | this;
        Object.defineProperty(this, "c", { writable: true, configurable: true, enumerable: true, get: f0, set: f0 });
        this[8] = v3;
    }
    constructor() {
        super();
        const v5 = this / f0;
        try {
            super.m(v5, v5);
        } catch(e7) {
        }
    }
    b = f0;
}
new C1();
const v9 = new C1();
new C1();
function f17() {
    return "4294967297";
}
new Map();
const v24 = [C1,9223372036854775807];
Reflect.apply(("function").lastIndexOf, "function", v24);
Object.defineProperty("4294967297", "4294967297", { writable: true, enumerable: true, get: f0, set: f17 });
Object.defineProperty("4294967297", -1.7976931348623157e+308, { writable: true, configurable: true, get: f0 });
try { v9.keys(-1.7976931348623157e+308, Reflect); } catch (e) {}
C1.a;
function f29() {
    return Reflect;
}
