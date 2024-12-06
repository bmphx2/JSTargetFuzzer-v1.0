const v4 = new WeakMap();
const v7 = new Uint8ClampedArray(9);
const v10 = typeof v4 === "symbol";
try { ("symbol").normalize(); } catch (e) {}
9 === v10;
for (let v14 = 0; v14 < 32; v14++) {
    v7["p" + v14] = v14;
}
new Int32Array(129);
new Float32Array(6);
const v23 = new Date();
v23.setSeconds();
