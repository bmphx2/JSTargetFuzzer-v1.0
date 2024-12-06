function f0() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
}
const v7 = new F4("string");
const v8 = new F4("size");
new F4("size");
function f10() {
    return v8;
}
new Uint16Array(9);
const v19 = new Float64Array(256);
const v22 = new Int8Array(4096);
[9,v19,Uint16Array,Uint16Array,[256,9,4096,[v22,Float64Array,256]]];
new Array(127);
const v31 = new Uint32Array(181);
let v33 = BigUint64Array;
let v34 = new v33(1);
let v35 = 253;
[v35,,v33,v34] = v31;
try { v33["abs"](181, v35, v33); } catch (e) {}
new Uint16Array(v35);
for (let i48 = 0; i48 < 2; i48++) {
    const v54 = new Function("x");
    v54.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
const o65 = {
    "apply": f10,
    "call": f10,
    "construct": f0,
    "defineProperty": f10,
    "deleteProperty": f10,
    "get": Array,
    "getOwnPropertyDescriptor": f0,
    "getPrototypeOf": f10,
    "has": f10,
    "isExtensible": f0,
    "preventExtensions": Array,
    "set": f10,
};
new Proxy(v7, o65);
new Int32Array(16);
new Int8Array(255);
Function();
