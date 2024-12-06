function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a14;
    this.b = "max";
    this.c = "p3v8r";
}
const v18 = new F12("max", 255, 40040, F12);
const v19 = new F12("p3v8r", v18, v18, -60875);
const v20 = new F12("p3v8r", v19, 40040, -2);
const v21 = 255 instanceof F12;
let v22;
try { v22 = v19.p("max", v19, -60875, v20, v20); } catch (e) {}
const v23 = v22 & 536870912;
v19[257];
const t12 = "p3v8r";
t12[-2] >>>= 257;
let v25;
try { v25 = v22(v21, v23, "unscopables", v22); } catch (e) {}
v19[v21] = 255;
for (let v26 = 0; v26 < 32; v26++) {
    v25["p" + v26] = v26;
}
