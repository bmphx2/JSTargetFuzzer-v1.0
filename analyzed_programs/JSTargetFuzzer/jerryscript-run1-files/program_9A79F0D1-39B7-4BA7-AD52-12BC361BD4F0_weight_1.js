function f3(a4) {
    const o11 = {
        set f(a6) {
            if (a4) {
                f = super.f;
            } else {
            }
        },
        "e": -40451637,
    };
    return o11;
}
const v12 = f3(-40451637);
const v13 = f3(-40451637);
const v14 = f3(f3);
const o15 = {
    __proto__: v14,
    "f": 8,
    "d": 1146570610,
};
v12.e;
try { v12["toString"]("toString"); } catch (e) {}
v13 ^ v12;
const o24 = {
    "apply": f3,
    "call": f3,
    "construct": f3,
    "deleteProperty": f3,
    "get": f3,
    "getOwnPropertyDescriptor": f3,
    "getPrototypeOf": f3,
    "has": f3,
    "isExtensible": f3,
    "ownKeys": f3,
    "preventExtensions": f3,
    "set": f3,
    "setPrototypeOf": f3,
};
new Proxy(v13, o24);
const v31 = (-4294967297n < -4294967297n).toString;
try { v31(); } catch (e) {}
