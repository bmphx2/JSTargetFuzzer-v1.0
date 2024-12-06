const v1 = new WeakSet();
function f5() {
    return -4294967296;
}
v1.toString = f5;
typeof -1 === "number";
const v12 = f5();
new Uint32Array(257);
const v18 = new Uint8ClampedArray(13);
new Int16Array(124);
new BigUint64Array(108);
const v27 = new Int8Array(627);
[1990954580n];
const v29 = [Int16Array,Uint8ClampedArray,627];
[v12,Uint32Array,v29,v18,257];
for (let v31 = 0; v31 < 32; v31++) {
    v29["p" + v31] = v31;
}
const v36 = new BigUint64Array(64);
let v42 = 2.2250738585072014e-308;
h = v42;
let v48 = 434742601;
with (v27) {
    length = "number";
    v36[Symbol.toStringTag];
}
v27.length = -13;
[v48,...v42] = v36;
try { v42(v48, -505.82829815177945, BigUint64Array, v42); } catch (e) {}
