function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -10;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v5;
    this.e = v4;
    this.g = a8;
}
new F6(F0);
const v10 = new F6(v3);
new F6(F0);
new Uint8ClampedArray(1000);
new Float64Array(1024);
new Uint8ClampedArray(1024);
[8,0,4294967297,-33048,6,1000,983207413];
const v25 = [8];
const v26 = [-13,-465622521,22703];
if (Float64Array) {
    try { v26.sort(v10); } catch (e) {}
} else {
    const t25 = "function";
    t25[v26] = 1024;
}
let v30 = "toString";
-2.2250738585072014e-308 ^ 674250.9577052628;
const v35 = (a36, a37) => {
    a36.length;
    v30 = "number";
    return 570009.5976097113;
};
570009.5976097113 / "function";
"number" ^ 0.4059163013705742;
v25["forEach"](v35, "forEach");
