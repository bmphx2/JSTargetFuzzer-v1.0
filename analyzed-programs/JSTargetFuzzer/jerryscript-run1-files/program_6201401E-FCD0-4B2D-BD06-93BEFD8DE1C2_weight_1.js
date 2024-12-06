[];
function f7(a8, a9, a10, a11) {
    const o22 = {
        set g(a13) {
            function F14(a16, a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a13;
                this.g = a17;
                this.b = a11;
            }
            const v19 = new F14(a11, 4, a13);
            new F14(a13, v19, v19);
            new F14(2, a13, a11);
        },
        ...a9,
    };
    return o22;
}
const v23 = f7(-536870912, -6, -13094, -536870912);
f7(-6, 4, -70147812, 2);
f7(2, v23, -6, 4);
const o26 = {
    "apply": f7,
    "call": f7,
    "construct": f7,
    "defineProperty": f7,
    "deleteProperty": f7,
    "get": f7,
    "getOwnPropertyDescriptor": f7,
    "getPrototypeOf": f7,
    "has": f7,
    "isExtensible": f7,
    "ownKeys": f7,
    "preventExtensions": f7,
    "set": f7,
};
new Proxy(v23, o26);
