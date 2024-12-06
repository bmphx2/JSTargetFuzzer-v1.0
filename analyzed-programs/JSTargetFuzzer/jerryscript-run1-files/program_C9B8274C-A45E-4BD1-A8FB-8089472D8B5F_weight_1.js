new Int16Array(199);
new Int16Array(256);
new Float64Array(512);
[129,-5,-42339];
[2,-16,65536,-628166318];
[129,536870888,-1177312048];
("multiline")["x"];
const v32 = Symbol.species;
const t8 = "x";
t8[v32] = 536870887n;
const t10 = 1000n;
t10[9] = 255;
let v33;
try { v33 = v32.toString(255, "x", 1073741824n); } catch (e) {}
v33 = v32;
