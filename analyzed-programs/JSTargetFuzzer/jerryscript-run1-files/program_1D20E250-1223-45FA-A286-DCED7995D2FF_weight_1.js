new Int32Array(3661);
new Int8Array(1007);
new Float32Array(4);
new Int8Array(10);
new BigInt64Array(1007);
new BigUint64Array(3);
("multiline")["x"];
const v35 = Symbol.species;
const t8 = "x";
t8[v35] = 536870887n;
const t10 = 1000n;
t10[9] = 255;
let v36;
try { v36 = v35.toString(255, "x", 1073741824n); } catch (e) {}
v36 = v35;
