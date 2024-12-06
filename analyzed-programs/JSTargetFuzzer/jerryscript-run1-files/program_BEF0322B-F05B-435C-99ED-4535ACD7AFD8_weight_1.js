const v0 = [1.0,662.6861753599194];
function f2() {
    return f2;
}
function f3(a4) {
    const o5 = {
    };
    return o5;
}
const v6 = f3();
async function f7(a8, a9, a10) {
    const v12 = `
        Object.defineProperty(v6, "a", { writable: true, configurable: true, get: f2 });
        const v13 = f3 % 31874;
        +v13;
        -9223372036854775807 * v13;
    `;
    eval(v12);
    return eval;
}
f7();
const v19 = [3.0,-5.0,1000000.0,-179.6837929239814,2.0,2.2250738585072014e-308];
const v20 = [5.0,-3.0,0.9273794847667174,-785348.922140294,-871964.7839419034];
class C21 {
    h;
    set e(a23) {
        for (let v24 = 0; v24 < 32; v24++) {
            this["p" + v24] = v24;
        }
        try { new a23(this, v19, v0); } catch (e) {}
    }
    static c;
    [v0];
}
const v28 = new C21();
const v29 = new C21();
const v30 = new C21();
function F31(a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v29;
    this.g = a34;
    this.c = v29;
}
new F31(v28, v20);
const v36 = new F31(F31, v28);
new F31(v30, v36);
const v43 = new Uint8Array(1000);
const v46 = new Int16Array(211);
new Uint8ClampedArray(16);
new Float32Array(1);
const v55 = new Uint8Array(1);
new Uint8Array(2);
for (let v59 = 0; v59 < 32; v59++) {
    v46["p" + v59] = v59;
}
f = v55;
const t56 = "seal";
t56[-160122027] = v43;
