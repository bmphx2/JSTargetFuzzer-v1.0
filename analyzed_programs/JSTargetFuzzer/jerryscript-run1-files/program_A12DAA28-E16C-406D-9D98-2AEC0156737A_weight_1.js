const v4 = new WeakMap();
const v7 = new Uint8ClampedArray(9);
const v10 = typeof v4 === "symbol";
try { ("symbol").normalize(); } catch (e) {}
9 === v10;
for (let v14 = 0; v14 < 32; v14++) {
    v7["p" + v14] = v14;
}
let v19;
try {
const t0 = 1;
v19 = t0(1, 1);
} catch (e) {}
(1000n).toString(v19);
new Int32Array(129);
new Float32Array(6);
const v27 = new Date();
v27.setSeconds();
