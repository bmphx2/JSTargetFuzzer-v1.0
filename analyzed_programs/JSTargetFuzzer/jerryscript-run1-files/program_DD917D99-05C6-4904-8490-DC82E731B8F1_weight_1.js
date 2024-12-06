function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 14n;
    this.a = 14n;
}
new F3(14n);
new F3(F3);
new F3(1073741823n);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a13;
}
new F9(14n, 1073741823n, 14n);
const v15 = new F9(14n, F3, 14n);
new F9(1073741823n, v15, 1073741823n);
new Uint16Array(9);
const v25 = new Float64Array(256);
const v28 = new Int8Array(4096);
[9,v25,Uint16Array,Uint16Array,[256,9,4096,[v28,Float64Array,256]]];
new Array(127);
const v37 = new Uint32Array(181);
let v39 = BigUint64Array;
let v40 = new v39(1);
let v41 = 253;
new Uint8Array(10, 10);
const v47 = Symbol.toPrimitive;
const o54 = {
    [v47]() {
        function F49(a51, a52, a53) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = "1073741824";
        }
        return "1073741824";
    },
};
[v41,,v39,v40] = v37;
try { v39["abs"](181, v41, v39); } catch (e) {}
new Uint16Array(v41);
for (let i67 = 0; i67 < 2; i67++) {
    const v73 = new Function("x");
    v73.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
