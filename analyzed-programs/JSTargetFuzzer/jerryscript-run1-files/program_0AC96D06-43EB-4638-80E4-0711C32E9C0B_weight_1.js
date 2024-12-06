const v1 = new WeakMap();
function f5() {
    return 1073741825;
}
function f6(a7, a8) {
    const o14 = {
        "c": f5,
        "e": a8,
        "f": 5,
        [a7]: 1073741825,
        set g(a10) {
        },
        "a": 5,
        __proto__: v1,
    };
    return o14;
}
const v15 = f6(1073741825, 1073741825);
const v16 = f6(5, 909258358);
const v17 = f6(5, 1073741825);
Object.defineProperty(v15, "g", { value: v17 });
5 < 909258358;
v16[76] = 1073741825;
v16[909258358];
v17[107];
new Uint16Array(9);
const v29 = new Float64Array(256);
const v32 = new Int8Array(4096);
[9,v29,Uint16Array,Uint16Array,[256,9,4096,[v32,Float64Array,256]]];
new Array(127);
const v41 = new Uint32Array(181);
let v43 = BigUint64Array;
let v44 = new v43(1);
let v45 = 253;
[v45,,v43,v44] = v41;
try { v43["abs"](181, v45, v43); } catch (e) {}
new Uint16Array(v45);
for (let i58 = 0; i58 < 2; i58++) {
    const v64 = new Function("x");
    v64.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
