function f0() {
}
function f1() {
    const o5 = {
        [f0]: f0,
        __proto__: f0,
        "g": f0,
        "c": f0,
        "h": f0,
        "f": f0,
        ...f0,
        ...f0,
        valueOf() {
            return f0 >= this.__proto__;
        },
        "b": f0,
    };
    return o5;
}
const v6 = f1();
const o7 = {
    "construct": f1,
    "defineProperty": f0,
    "get": f1,
    "has": f1,
    "isExtensible": f0,
    "ownKeys": f1,
    "preventExtensions": f1,
    "setPrototypeOf": f1,
};
new Proxy(v6, o7);
const v10 = f1();
const v11 = f1();
const v15 = [-9007199254740992,v10,-4096,v10,-4096];
const v16 = [f0,v6,f0,f1];
[v16,v6,-4096,v16,f0];
[-65537,10,1024];
const v22 = [3,2,-128,1024,-1,-57710];
[9223372036854775807,-6,36403,9007199254740992,2,5,268435439,54419,-9007199254740990];
new BigInt64Array(9);
Object.defineProperty(v22, "d", { writable: true, value: 0.0559660177158573 });
Object.defineProperty(v15, "c", { enumerable: true, get: f0, set: f1 });
new Float64Array(2078);
new Uint32Array(1);
new BigUint64Array(1376);
const v41 = new BigInt64Array(2);
v22.length = 0;
try { f0(1376, ...v11, -2147483647, v6, ...v41); } catch (e) {}
[2.2250738585072014e-308,-6.92283619354739,575.0622429384769,-5.936495643112001e+307,794.5948726879046,-3.0,Infinity];
[1000000.0,-0.0,1000000000000.0];
[-716.7593640996439,-1.3843784124156878e+308];
new BigUint64Array(0);
const v52 = new Uint8ClampedArray(512);
([-0.0,-1000000.0,-1.6429392552409766e+308,NaN,-771.8014360054368,619735.3417669735,-0.0,2.0,1e-15,-1.0]).includes() == v52.length;
