const v4 = new Map();
function f5() {
    return -256n;
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
    this.g = a9;
    this.d = a9;
}
const v10 = new f5(0n, 0n);
const v11 = new F6(32665n, 0n);
const v12 = new F6(0n, 0n);
for (const v13 in v12) {
    v13 !== v13;
    v12[f5] = v13;
}
const v16 = (32665n).toStringTag;
const v17 = v10[v16];
const v18 = [];
const v19 = v4.size;
const v20 = v19 == v12;
const v21 = v20 ? v19 : -256n;
let v22;
try { v22 = v17(v17, v20); } catch (e) {}
try { v22["exp"](v10, 0n, v16); } catch (e) {}
const o30 = {
    p() {
        const v26 = v12[v21];
        const o27 = {
            "call": v26,
            "construct": 0n,
            "get": f5,
            "getOwnPropertyDescriptor": v16,
            "isExtensible": f5,
            "ownKeys": f5,
            "preventExtensions": f5,
            "set": f5,
            "setPrototypeOf": F6,
        };
        new Proxy(v11, v26);
        this[v18] = this;
        return v18;
    },
};
