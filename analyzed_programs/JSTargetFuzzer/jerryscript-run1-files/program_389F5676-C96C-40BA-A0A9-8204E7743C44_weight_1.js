function f0() {
}
class C1 {
    constructor() {
        const v3 = this.__proto__;
        const o4 = {
            "call": f0,
            "construct": f0,
            "g": v3,
            [v3]: this,
            __proto__: C1,
            ...C1,
            "a": C1,
            "has": f0,
            "ownKeys": f0,
            "set": f0,
            "setPrototypeOf": f0,
        };
        Object.defineProperty(v3, "h", { writable: true, configurable: true, enumerable: true, value: Proxy });
        Math.fround(-f0);
        const v12 = -f0 % f0;
        Math.acosh(f0);
        +v12;
        new Proxy(this, o4);
    }
}
new C1();
new C1();
new C1();
let v19 = 15;
const v21 = new Int8Array(v19);
new Uint8ClampedArray(101);
new Int16Array(8);
const v30 = new Uint32Array(181);
let v32 = BigUint64Array;
let v33 = new v32(1);
let v34 = 253;
v34 + 1;
f0();
v19 = v34;
v21.valueOf = f0;
const v38 = Symbol.match;
v21[v38] = v38;
[v34,,v32,v33] = v30;
try { v32["abs"](181, v34, v32); } catch (e) {}
new Uint16Array(v34);
for (let i51 = 0; i51 < 2; i51++) {
    const v57 = new Function("x");
    v57.name;
}
Function();
