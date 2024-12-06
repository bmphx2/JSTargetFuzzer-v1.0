function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a6;
    this.f = "BH";
}
new F3("object", "BH");
const v8 = new F3("BH", "o");
const v9 = new F3("o", "o");
let v12 = 10;
for (; v12--;) {
    const t10 = "object";
    t10.c = 1;
    let v14;
    try { v14 = v9(v8, v12, "BH", "o", -4096); } catch (e) {}
    try { v14("BH", "BH", v14); } catch (e) {}
}
("o").length;
new Float64Array(184);
new BigInt64Array(4006);
new Uint8ClampedArray(257);
let v30 = -18699;
new WeakMap();
2n > v30++;
