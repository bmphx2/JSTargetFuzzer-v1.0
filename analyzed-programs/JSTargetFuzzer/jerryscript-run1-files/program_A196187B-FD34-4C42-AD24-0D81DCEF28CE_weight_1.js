function f0() {
}
function f1() {
    const o9 = {
        ...f0,
        valueOf() {
            const v6 = [this,-6];
            const v7 = [this,v6,v6,v6,v6];
            [this,f0,34223];
            return v7;
        },
        "e": f0,
        ...f0,
        1073741823: f0,
    };
    return o9;
}
const v10 = f1();
const v11 = f1();
const v12 = f1();
const v13 = [v10,v11];
const v14 = [v11,v11,f1,f1];
const v15 = [v14,v12,v12,f0,v13];
new Float64Array(1000);
new Float64Array(1);
new Float64Array(64);
const v27 = new Uint32Array(181);
let v29 = BigUint64Array;
let v30 = new v29(1);
let v31 = 253;
[v31,,v29,v30] = v27;
let v33;
try { v33 = v29["abs"](181, v31, v29); } catch (e) {}
const v38 = new Uint16Array(v31);
v14.valueOf = v33;
`MAX_SAFE_INTEGER${Uint32Array}-51445${Float64Array}string${Float64Array}E`;
const o42 = {
    "call": f0,
    "construct": f0,
    "defineProperty": f1,
    "deleteProperty": f0,
    "get": f1,
    "getOwnPropertyDescriptor": f0,
    "getPrototypeOf": f1,
    "has": f1,
    "isExtensible": f1,
    "ownKeys": f1,
    "preventExtensions": f0,
    "set": f1,
    "setPrototypeOf": f0,
};
new Proxy(v14, o42);
for (let i49 = 0; i49 < 2; i49++) {
    const v55 = new Function("x");
    v55.name;
}
Function();
new Uint16Array(...v38, ...v15, -4294967295, v30, ..."x");
v15[Symbol.toPrimitive] = Function;
