function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a6;
    function f8(a9) {
        try {
            arguments[Symbol.unscopables];
        } finally {
        }
        let v21 = a6--;
        a6--;
        --v21;
        return arguments;
    }
    f8(-1, f0);
    this.g = -9;
}
const v25 = new F4(6, -1);
new F4(-9, 6);
new F4(-9, -9);
const v29 = new WeakMap();
new Float64Array(117);
let v33 = 4;
new Float64Array(v33);
new Int32Array(6);
new Uint16Array(9);
const v44 = new Float64Array(256);
const v47 = new Int8Array(4096);
const v50 = [9,v44,Uint16Array,Uint16Array,[256,9,4096,[v47,Float64Array,256]]];
try {
    v44 / WeakMap;
} catch(e52) {
    for (let v53 = 0; v53 < 32; v53++) {
        v47["p" + v53] = v53;
    }
}
new Array(127);
const v61 = new Uint32Array(181);
let v63 = BigUint64Array;
let v64 = new v63(1);
let v65 = 253;
[v65,,v63,v64] = v61;
try { v63["abs"](181, v65, v63); } catch (e) {}
const v71 = v50[638046528];
try { v29.delete(v71); } catch (e) {}
v33 = 127;
("abs")[v25];
6 * v64;
new Uint16Array(v65);
let v82 = 12017;
v82-- && -1;
v61 && v61;
+v82;
+2;
for (let i90 = 0; i90 < 2; i90++) {
    const v96 = new Function("x");
    v96.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
