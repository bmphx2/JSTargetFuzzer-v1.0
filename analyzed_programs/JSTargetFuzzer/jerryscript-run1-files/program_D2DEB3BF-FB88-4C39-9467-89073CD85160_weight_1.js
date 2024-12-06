function f0() {
    const o4 = {
        ..."f",
        ..."f",
        __proto__: "f",
        4294967295: -65536,
        [-2.0]: -65536,
        "a": "f",
        ...-65536,
        268435456: -2.0,
        "g": "f",
        ["f"]: "f",
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v7 = f0();
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a10;
    this.f = f0;
    this.b = a10;
}
const v12 = new F8(v5, v6);
const v13 = new F8(v6, v6);
const v14 = new F8(v5, v6);
function f19(a20, a21, a22) {
    const o23 = {
        ...v14,
        [a21]: 181,
    };
    return o23;
}
const v24 = f19(v12, v13, v5);
f19(v14, v14, v5);
const v26 = f19(v14, v13, v24);
const v28 = new Uint32Array(181);
v14 << v26;
-Infinity;
let v37 = BigUint64Array;
let v38 = new v37(1);
let v39 = 253;
[v39,,v37,v38] = v28;
try { v37["abs"](181, v39, v37); } catch (e) {}
new Uint16Array(v39);
for (let i52 = 0; i52 < 2; i52++) {
    const v58 = new Function("x");
    new Uint8ClampedArray(5);
    new Float32Array(4044);
    new Uint8ClampedArray(38);
    v58.name;
    const v69 = typeof 1;
    v69 === "number";
    try { v5["toString"](v69, Uint8ClampedArray, v7); } catch (e) {}
}
Function();
