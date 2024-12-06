function f6() {
    return "-22449";
}
const v10 = [-50887,"-22449",-50887];
["-22449",[v10,v10],f6];
const o13 = {
    "apply": f6,
    "call": f6,
    "defineProperty": f6,
    "deleteProperty": f6,
    "get": f6,
    "getOwnPropertyDescriptor": f6,
    "has": f6,
    "isExtensible": f6,
    "ownKeys": f6,
    "preventExtensions": f6,
    "set": f6,
};
new Proxy(v10, o13);
