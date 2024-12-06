new Float32Array(1000);
new Uint32Array(4065, "sticky", 1000, Uint32Array);
new BigUint64Array(218);
("multiline")["x"];
const v32 = Symbol.species;
const t5 = "x";
t5[v32] = 255n;
const t7 = 1000n;
t7[9] = 255;
let v33;
try { v33 = v32.toString(255, "x", 1073741824n); } catch (e) {}
v33 = v32;
