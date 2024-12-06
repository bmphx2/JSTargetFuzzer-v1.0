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
for (let [v16,,...v17] of "K2u95") {
}
let v24 = 0;
while (v24 < 2) {
    const o27 = {
        "apply": f3,
        "call": f3,
        "defineProperty": f3,
        "deleteProperty": f3,
        "get": f3,
        "ownKeys": f3,
        "preventExtensions": f3,
        "set": f3,
    };
    new Proxy(v11, o27);
    v24++;
}
const v31 = new Uint32Array(181);
let v33 = BigUint64Array;
let v34 = new v33(1);
let v35 = 253;
[v35,,v33,v34] = v31;
let v37;
try { v37 = v33["abs"](181, v35, v33); } catch (e) {}
const o38 = {
    ...v34,
    __proto__: "abs",
};
let v41 = v10 | v10;
++v41;
Math.log10(-268435456 + v10);
new Uint16Array(v35);
for (let i55 = 0; i55 < 2; i55++) {
    const v61 = new Function("x");
    v61.name;
}
const v63 = Function();
f = v37;
delete o38[Uint32Array];
const t58 = "2147483648";
delete t58["x" >> v34];
-2 & v63;
