function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 19667;
    this.f = 19667;
    this.c = 19667;
}
new F0();
new F0();
new F0();
new Set();
("multiline")["x"];
new WeakMap();
const v39 = Symbol.species;
const t13 = "x";
t13[v39] = 536870887n;
const t15 = 1000n;
t15[9] = 255;
Symbol("x");
Symbol["keyFor"](v39);
const t17 = "x";
t17.length /= 13;
let v44;
try { v44 = v39.toString(255, "x", 1073741824n); } catch (e) {}
v44 = v39;
