function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a6;
    function f8(a9) {
        let v14 = a6--;
        a6--;
        --v14;
        return arguments;
    }
    f8(-1, f0);
    this.g = -9;
}
const v18 = new F4(6, -1);
new F4(-9, 6);
new F4(-9, -9);
const v22 = new WeakMap();
new Float64Array(117);
let v26 = 4;
new Float64Array(v26);
new Int32Array(6);
new Uint16Array(9);
const v37 = new Float64Array(256);
const v40 = new Int8Array(4096);
const v43 = [9,v37,Uint16Array,Uint16Array,[256,9,4096,[v40,Float64Array,256]]];
new Array(127);
const v49 = new Uint32Array(181);
let v51 = BigUint64Array;
let v52 = new v51(1);
let v53 = 253;
[v53,,v51,v52] = v49;
try { v51["abs"](181, v53, v51); } catch (e) {}
const v59 = v43[638046528];
try { v22.delete(v59); } catch (e) {}
v26 = 127;
("abs")[v18];
6 * v52;
new Uint16Array(v53);
for (let i70 = 0; i70 < 2; i70++) {
    const v76 = new Function("x");
    v76.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
