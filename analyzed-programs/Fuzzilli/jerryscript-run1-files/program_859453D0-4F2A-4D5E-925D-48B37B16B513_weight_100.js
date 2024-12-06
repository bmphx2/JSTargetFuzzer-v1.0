const v1 = new WeakSet();
const v2 = [-2079015543,1073741824,-4294967295,15287,27035,-37404];
const v3 = [10,-2];
const v4 = [256,1601475949,536870887];
function f5(a6) {
    const o17 = {
        [WeakSet]: v2,
        ...v4,
        ...v4,
        [v1]: v3,
        set f(a8) {
            let v9 = 0;
            while (v9 < 5) {
                delete v2[v9];
                v9++;
            }
        },
    };
    return o17;
}
const v18 = f5(v3);
f5(f5(v18));
const o24 = {
    "apply": f5,
    "call": f5,
    "construct": f5,
    "defineProperty": f5,
    "deleteProperty": f5,
    "get": f5,
    "getOwnPropertyDescriptor": f5,
    "getPrototypeOf": f5,
    "has": f5,
    "isExtensible": f5,
    "ownKeys": f5,
    "preventExtensions": f5,
    "set": f5,
};
new Proxy(v18, o24);
