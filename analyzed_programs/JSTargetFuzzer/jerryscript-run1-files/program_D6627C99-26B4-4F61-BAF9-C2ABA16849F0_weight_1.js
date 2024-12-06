const v1 = new WeakSet();
function f5() {
    return v1;
}
const v6 = [-1.1252825487984244e+308,-0.8042034386581918];
const v7 = [0.19298048887995267,-5.0,-4.0,1.4901117984784378,-4.0,881.8175359046854,5.0,0.49814703839711294,0.8403318198102799,Infinity];
const v8 = [1.0,0.4798935260602999];
function f9(a10, a11, a12) {
    const o13 = {
        "g": v6,
        __proto__: v7,
        "e": a12,
        "c": v7,
        "a": WeakSet,
        ...a11,
        [WeakSet]: v8,
        "d": 1024,
        ...v1,
        "f": v8,
        ...v8,
        "b": 1024,
        "e": v8,
    };
    return o13;
}
const v14 = f9(4096, v7, 4096);
f9(4096, 4096, 1024);
f9(1024, 1024, v14);
const v19 = new Uint32Array(181);
let v21 = BigUint64Array;
let v22 = new v21(1);
let v23 = 253;
[v23,,v21,v22] = v19;
try { v21["abs"](181, v23, v21); } catch (e) {}
new Uint16Array(v23);
for (let i36 = 0; 2 < 2; i36++) {
    const v42 = new Boolean("x");
    v42.name;
}
Boolean();
