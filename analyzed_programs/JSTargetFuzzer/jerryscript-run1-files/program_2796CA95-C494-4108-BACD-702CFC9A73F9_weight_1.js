let v7 = 35002;
let v8 = 10;
const v12 = [];
const v13 = [v12,v12];
const v14 = [v13,v13];
const v15 = [v13,v14,v13,v14,v13];
let v16 = -1e-15;
let v17 = -2.2250738585072014e-308;
v15.__proto__;
v15[1024];
({"a":v7,"g":v17,"length":v8,} = v13);
const v25 = v12.length;
try { v14.slice(4, v25); } catch (e) {}
function* f29(a30, a31) {
    a30[-1000000.0] = v14;
    a30.valueOf = v7;
    const v32 = v13[0.7357406176584567];
    try { a31(685989.8903615018, v32); } catch (e) {}
    v16 += v16;
    function f34(a35, a36, a37, a38) {
        if (v32) {
            const o39 = {
                "apply": f29,
                "call": f29,
                "construct": f34,
                "defineProperty": f29,
                "get": f34,
                "getOwnPropertyDescriptor": f34,
                "getPrototypeOf": f29,
                "has": f34,
                "isExtensible": f34,
                "preventExtensions": f34,
                "set": f34,
                "setPrototypeOf": f34,
            };
            new Proxy(v15, o39);
        } else {
            let v44 = -1.2083562285420505e+308;
            Math.cosh(--a31);
            Math.tan(--v44);
            v44 << a35;
        }
        Object.defineProperty(v13, 1, { enumerable: true, value: a30 });
        a38[8] |= 4.0;
        return arguments;
    }
    f34();
    yield 45279;
    return 39366;
}
f29(v14, 39366);
