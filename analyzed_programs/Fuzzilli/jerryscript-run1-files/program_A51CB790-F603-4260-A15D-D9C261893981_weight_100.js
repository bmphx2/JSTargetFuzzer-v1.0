function f0() {
}
function f1() {
    const o5 = {
        [f0]: f0,
        __proto__: f0,
        "g": f0,
        "c": f0,
        "h": f0,
        "f": f1,
        ...f0,
        ...f0,
        valueOf() {
            return f0 >= this.__proto__;
        },
        "b": f0,
    };
    return o5;
}
let v6 = f1();
const o10 = {
    get f() {
        new Set();
        return f1;
    },
    "construct": f1,
    "defineProperty": f0,
    "get": f1,
    "has": f1,
    "isExtensible": f0,
    "ownKeys": f1,
    "b": f0,
    "d": f1,
    "e": f0,
    __proto__: f0,
    "preventExtensions": f1,
    "preventExtensions": f1,
    "setPrototypeOf": f1,
};
const v12 = new Proxy(v6, o10);
const v13 = f1();
const v14 = f1();
let v17 = 8.576954314902409;
v12[NaN] = 0.15071034721613885;
new Float32Array(1194);
const v24 = new f0();
const v26 = v24 >> 5.0;
(v26 && v26) < BigInt64Array;
({"f":v6,"h":v17,} = v6);
const v31 = new BigUint64Array();
const o32 = {
};
const v34 = new Proxy(v31, o32);
v34.__proto__;
const v36 = [-9007199254740992,v13,-4096,v13,-4096];
const v37 = [f0,o10,f0,f1];
[v37,v6,-4096,v37,f0];
[-65537,10,1024];
const v43 = [3,2,-128,1024,-1,-57710];
[9223372036854775807,-6,36403,9007199254740992,2,5,268435439,54419,-9007199254740990];
new BigInt64Array(9);
Object.defineProperty(v43, "d", { writable: true, value: 0.15071034721613885 });
Object.defineProperty(v36, "c", { enumerable: true, get: f0, set: f1 });
new Float64Array(2078);
new v6(1);
new BigUint64Array(1376);
const v62 = new BigInt64Array(2);
function f68(a69, a70, a71, a72) {
    const v73 = typeof a70;
    const v74 = Array(a70);
    Array[3] = a72;
    Array(a70);
    let [] = v74;
    [-4294967295,a69,a72,v74,a69];
    [3,v73,-2];
    [a71,f68];
    return f68;
}
v43.length = 0;
try { f0(1376, ...v14, -2147483647, v6, ...v62); } catch (e) {}
[2.2250738585072014e-308,-6.92283619354739,575.0622429384769,-5.936495643112001e+307,794.5948726879046,-3.0,Infinity];
[1000000.0,-0.0,1000000000000.0];
[-716.7593640996439,-1.3843784124156878e+308];
new BigUint64Array(0);
const v88 = new Uint8ClampedArray(512);
[-0.0,-1000000.0,-1.6429392552409766e+308,NaN,-771.8014360054368,619735.3417669735,-0.0,2.0,1e-15,-1.0];
v43.includes() == v88.length;
