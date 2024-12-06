const v2 = new Int32Array(1);
const v5 = new Float64Array(1);
const v8 = new Uint8Array(16);
try {
    try { v5.set(v2, 1); } catch (e) {}
} catch(e11) {
    v2[257] = e11;
} finally {
    try { v2.every(Uint8Array, v8); } catch (e) {}
}
const o15 = {
    6: 1000,
};
v8.length = 6;
let v17 = 9223372036854775807n;
let v18 = 0;
do {
    -1e-15 > v18 ? -1e-15 : v18;
    v18++;
} while (v18 < 2)
let v24 = 9n;
v24 -= v17;
v17--;
