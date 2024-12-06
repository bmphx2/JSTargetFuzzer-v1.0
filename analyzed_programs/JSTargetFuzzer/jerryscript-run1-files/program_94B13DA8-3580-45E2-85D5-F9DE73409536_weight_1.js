class C1 {
    p() {
        return 0.0;
    }
    constructor() {
    }
}
const v10 = new C1();
const v11 = new C1();
new C1();
function f13() {
    return v11;
}
C1.a;
v10[3];
const o22 = {
    "construct": f13,
    "deleteProperty": f13,
    "get": f13,
    "getOwnPropertyDescriptor": f13,
    "has": f13,
    "isExtensible": f13,
    "ownKeys": f13,
};
new Proxy(C1, o22);
