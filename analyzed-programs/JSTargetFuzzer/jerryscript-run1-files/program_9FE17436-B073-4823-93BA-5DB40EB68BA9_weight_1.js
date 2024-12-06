function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 153263908;
    this.c = 153263908;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a8;
}
const v9 = new F6(v5);
const v10 = new F6(v4);
const v11 = new F6(v9);
class C12 extends F6 {
    valueOf(a14, a15) {
        function F16(a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = a18;
        }
        new F16(v10, a14);
        new F16(v3, v9);
        new F16(v11, this);
        return v10;
    }
    1905499877;
}
const v23 = new C12();
new C12();
new C12();
const v28 = new Uint16Array(9);
const v31 = new Float64Array(256);
function f34(a35, a36, a37) {
    C12[256];
    return a35;
}
f34(v28, v23, v10);
let v41 = new Uint32Array();
(567.4785003396028 | 567.4785003396028) - ++v41;
const v46 = new Int8Array(4096);
[9,v31,Uint16Array,Uint16Array,[256,9,4096,[v46,Float64Array,256]]];
new Array(127);
const v55 = new Uint32Array(181);
let v57 = BigUint64Array;
let v58 = new v57(1);
let v59 = 253;
[v59,,v57,v58] = v55;
try { v57["abs"](181, v59, v57); } catch (e) {}
new Uint16Array(v59);
for (let i72 = 0; i72 < 2; i72++) {
    const v78 = new Function("x");
    v78.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
