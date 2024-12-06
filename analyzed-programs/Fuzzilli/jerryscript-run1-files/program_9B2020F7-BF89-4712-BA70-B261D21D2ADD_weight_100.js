const v2 = new Int32Array(239);
const v5 = new Int8Array(0);
let v6 = 1;
const v8 = new Uint8Array(v6);
const v13 = new WeakMap();
let v15;
try {
const t0 = 239;
v15 = t0(v8, Uint8Array, WeakMap, Int32Array);
} catch (e) {}
v2.h = v15;
v15 = Int8Array;
let v16;
try { v16 = Int32Array(v5, 512, 128); } catch (e) {}
v2[v16];
let v18;
try { v18 = v16(); } catch (e) {}
v8[v16] = 512;
var c = v18;
[v6] = v8;
const v22 = new Int32Array(v13, Int32Array, WeakMap);
try { v5.keys(); } catch (e) {}
new Int32Array(68);
new Float32Array(10);
new BigUint64Array(2681);
const v35 = new Float64Array(1701);
for (const v36 in v35) {
    v35[Symbol.toPrimitive] = v36;
}
const v39 = (a40, a41) => {
    return a40;
};
delete v13[v22];
