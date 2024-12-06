function f0() {
}
function f1() {
    return f0;
}
class C2 extends f0 {
    m(a4, a5) {
        const v6 = delete this[f0];
        super.g = this;
        let v8;
        try { v8 = a5.valueOf(arguments, v6, v6, this, f0); } catch (e) {}
        const o9 = {
            "apply": f0,
            "construct": f0,
            "defineProperty": f0,
            "deleteProperty": f1,
            "get": a5,
            "getOwnPropertyDescriptor": f0,
            "getPrototypeOf": f0,
            "has": f1,
            "isExtensible": f0,
            "preventExtensions": f0,
            "set": f0,
            "setPrototypeOf": v8,
        };
        new Proxy(a5, o9);
        return o9;
    }
}
new C2();
new C2();
new C2();
[1073741823,9,9,-2147483648,43841,30413,9,65536,9,-58690];
[15025,268435440];
[268435456,-16,33963];
let v25 = 4087n;
const v26 = [5];
try { v26.flatMap(v26); } catch (e) {}
v25 **= v25;
