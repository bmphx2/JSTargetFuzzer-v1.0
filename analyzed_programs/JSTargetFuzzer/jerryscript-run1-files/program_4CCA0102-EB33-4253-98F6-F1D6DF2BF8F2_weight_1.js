function f3() {
    return 63035;
}
class C4 {
    constructor(a6) {
        a6.__proto__;
        try { new a6(); } catch (e) {}
    }
}
const v9 = new C4(C4);
Array(58193).includes();
new Uint32Array(8);
const v22 = new Uint16Array(9);
const v25 = new Int8Array(4);
const v28 = new BigUint64Array(108);
const v32 = Symbol.toPrimitive;
const o37 = {
    [v32]() {
        const o34 = {
            "construct": f3,
            "defineProperty": f3,
            "deleteProperty": f3,
            "get": Symbol,
            "getPrototypeOf": Symbol,
            "isExtensible": f3,
            "ownKeys": f3,
            "setPrototypeOf": Symbol,
        };
        new Proxy(this, o34);
        return 4;
    },
};
const v38 = new Int8Array(627);
const v41 = new BigUint64Array(64);
let v47 = 2.2250738585072014e-308;
h = v47;
v32.description = v9;
const v51 = -536870912 === v28;
v51 ? -536870912 : v28;
v25 >>> (v22 >> v51);
let v57 = 434742601;
v38.length = -13;
[v57,...v47] = v41;
try { v47(v57, v57, BigUint64Array, v38); } catch (e) {}
