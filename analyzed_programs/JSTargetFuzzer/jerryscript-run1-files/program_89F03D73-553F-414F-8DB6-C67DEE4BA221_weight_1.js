const v0 = /P\u0060/iv;
const v1 = /a\S\c_/gis;
const v2 = /a[a]/gvm;
const v6 = [v0,v0,v1,1.5324007811455052e+308];
[v6,[-178610.52003728808,v2],v2,v0];
function f9() {
    return 1.5324007811455052e+308;
}
let v13 = 0;
while (v13 < 6) {
    const o16 = {
        "call": f9,
        "construct": f9,
        "defineProperty": f9,
        "deleteProperty": f9,
        "getOwnPropertyDescriptor": f9,
        "getPrototypeOf": f9,
        "has": f9,
        "isExtensible": f9,
        "ownKeys": f9,
        "preventExtensions": f9,
        "set": f9,
        "setPrototypeOf": f9,
    };
    new Proxy(v6, o16);
    v13++;
}
