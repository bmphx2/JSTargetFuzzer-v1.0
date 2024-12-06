function f7() {
    return f7;
}
("multiline")["x"];
const v31 = Symbol.species;
const t5 = "x";
t5[v31] = 536870887n;
const t7 = 1000n;
t7[9] = 255;
let v32;
try { v32 = v31.toString(255, 9n, 1073741824n); } catch (e) {}
v32 = v31;
