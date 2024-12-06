function f0() {
    const o13 = {
        "e": "number",
        ["c"]: "isFrozen",
        ["number"]: "c",
        "a": "c",
        set c(a5) {
            function F6(a8, a9) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a8;
            }
            new F6("number", "c");
            new F6("isFrozen", "number");
            new F6("number", "isFrozen");
        },
    };
    return o13;
}
const v14 = f0();
f0();
const v16 = f0();
class C20 {
    [v14] = -8.53609027710361;
    static [-1];
    p(a22, a23) {
        const o24 = {
            "apply": f0,
            "call": f0,
            "deleteProperty": f0,
            "getOwnPropertyDescriptor": f0,
            "isExtensible": f0,
            "preventExtensions": f0,
            "set": f0,
        };
        new Proxy(a22, o24);
        return v16;
    }
}
new C20();
new C20();
const v30 = ("toString").trimLeft;
try { v30("toString", v30); } catch (e) {}
new C20();
new String();
