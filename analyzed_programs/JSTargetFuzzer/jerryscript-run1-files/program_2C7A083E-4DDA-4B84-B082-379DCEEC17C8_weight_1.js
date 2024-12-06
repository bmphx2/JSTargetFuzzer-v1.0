function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -42484;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o13 = {
        get b() {
            return -5;
        },
        "f": a7,
        13: v5,
        "c": a8,
        [a8]: a7,
    };
    return o13;
}
f6(v5, v4);
f6(v4, v5);
f6(v3, v3);
new Uint16Array(9);
const v25 = new Float64Array(256);
const v28 = new Int8Array(4096);
[9,v25,Uint16Array,Uint16Array,[256,9,4096,[v28,Float64Array,256]]];
new Array(127);
const v37 = new Uint32Array(181);
let v39 = BigUint64Array;
let v40 = new v39(1);
let v41 = 253;
[v41,,v39,v40] = v37;
try { v39["abs"](181, v41, v39); } catch (e) {}
new Uint16Array(v41);
for (let i54 = 0; i54 < 2; i54++) {
    const v60 = new Function("x");
    v60.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new BigUint64Array(0);
new Float32Array(1000);
new BigInt64Array(245);
new Int8Array(255);
Function();
