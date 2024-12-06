new WeakSet();
new Set();
new BigUint64Array(1903);
new Uint8ClampedArray(222);
new Uint32Array(1);
function F13() {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = new F13();
with (v15) {
    const o18 = {
        valueOf() {
            this();
            return v15;
        },
    };
}
new Uint16Array(9);
const v24 = new Float64Array(256);
const v27 = new Int8Array(4096);
[9,v24,Uint16Array,Uint16Array,[256,9,4096,[v27,Float64Array,256]]];
new Array(127);
const v36 = new Uint32Array(181);
let v38 = BigUint64Array;
let v39 = new v38(1);
let v40 = 253;
[v40,,v38,v39] = v36;
try { v38["abs"](181, v40, v38); } catch (e) {}
new Uint16Array(v40);
for (let i53 = 0; i53 < 2; i53++) {
    const v59 = new Function("x");
    v59.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
