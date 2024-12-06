function f3(a4, a5) {
    const o9 = {
        ...a5,
        get a() {
            this.h = a5;
            this.__proto__ = this;
            const t6 = super.a;
            t6.length = 3;
            return a4;
        },
        "e": -1,
        "c": -1,
        12: a4,
        __proto__: -1,
    };
    return o9;
}
const v10 = f3(9223372036854775807, -1);
const v11 = f3(9223372036854775807, 1);
f3(-1, -1);
let v21 = 0;
while (v21 < 2) {
    const o24 = {
        "apply": f3,
        "call": f3,
        "defineProperty": f3,
        "deleteProperty": f3,
        "get": f3,
        "ownKeys": f3,
        "preventExtensions": f3,
        "set": f3,
    };
    new Proxy(v11, o24);
    v21++;
}
const v28 = new Uint32Array(181);
let v30 = BigUint64Array;
let v31 = new v30(1);
let v32 = 253;
[v32,,v30,v31] = v28;
let v34;
try { v34 = v30["abs"](181, v32, v30); } catch (e) {}
const o35 = {
    ...v31,
    __proto__: "abs",
};
let v38 = v10 | v10;
++v38;
Math.log10(-268435456 + v10);
new Uint16Array(v32);
for (let i52 = 0; i52 < 2; i52++) {
    const v58 = new Function("x");
    v58.name;
}
const v60 = Function();
f = v34;
delete o35[Uint32Array];
const t56 = "2147483648";
delete t56["x" >> v31];
-2 & v60;
