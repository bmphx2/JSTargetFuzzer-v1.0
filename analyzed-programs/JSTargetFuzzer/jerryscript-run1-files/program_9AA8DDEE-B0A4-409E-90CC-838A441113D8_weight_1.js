function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = true;
    this.a = true;
}
const v3 = new F1();
new F1();
new F1();
let v6 = "64";
for (let v14 = 0; v14 < 32; v14++) {
    v3["p" + v14] = v14;
}
const v17 = new F1(532);
new Uint32Array(10);
new Uint16Array(v6, 10, 10);
f = v17;
Object.defineProperty(v3, "a", { writable: true, value: v3 });
5.0 % F1;
--v6;
new Float32Array(1477);
try { Uint8ClampedArray(Uint8ClampedArray, 1477); } catch (e) {}
