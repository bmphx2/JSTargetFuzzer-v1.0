const v4 = new Map();
function f5() {
    return v4;
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
    this.g = a9;
    this.d = a9;
}
const v10 = new F6(0n, 0n);
const v11 = new F6(32665n, 0n);
const v12 = new F6(0n, 0n);
for (const v13 in v12) {
    0n !== v13;
    v12[f5] = v13;
}
const v16 = Symbol.toStringTag;
const v17 = v10[v16];
const v18 = [];
const v19 = v4.size;
const v20 = v19 == v12;
v20 ? v19 : v12;
let v22;
try { v22 = v17(v17, v20); } catch (e) {}
let v24;
try { v24 = v22["exp"](v10, v16, v16); } catch (e) {}
const o30 = {
    p() {
        this[v24];
        const o27 = {
            "call": f5,
            "construct": f5,
            "get": f5,
            "getOwnPropertyDescriptor": f5,
            "isExtensible": f5,
            "ownKeys": f5,
            "preventExtensions": f5,
            "set": f5,
            "setPrototypeOf": f5,
        };
        new Proxy(v11, o27);
        this[v18] = this;
        return v18;
    },
};
