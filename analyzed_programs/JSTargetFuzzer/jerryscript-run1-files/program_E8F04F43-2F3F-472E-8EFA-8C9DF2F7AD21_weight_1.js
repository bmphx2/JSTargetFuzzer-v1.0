new Int32Array(5);
new Int32Array(11);
new BigInt64Array(60611);
("multiline")["x"];
const v29 = Symbol.species;
const t5 = "x";
t5[v29] = 536870887n;
const t7 = 1000n;
t7[9] = 255;
let v30;
try { v30 = v29.toString(255, "x", 1073741824n); } catch (e) {}
v30 = v29;
