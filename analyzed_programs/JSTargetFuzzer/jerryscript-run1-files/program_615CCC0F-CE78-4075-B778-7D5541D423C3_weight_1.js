let v1 = 1024;
const v5 = new Uint8Array(11);
let v6;
try { v6 = v5(11, v5); } catch (e) {}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v6;
    this.f = 255;
    this.g = 255;
}
new F7(255, v6);
typeof -268435456;
const v14 = new F7(65537, v1);
new F7(65537, v5);
const v18 = v1 + 255;
v18 instanceof Float64Array;
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a22;
}
new F20(v18, v18, 255);
new F20(65537, v1, v18);
new F20(65537, v6, v1);
const v28 = new Float64Array(944);
function f30() {
    return Uint8Array;
}
const v34 = Symbol.toPrimitive;
const o37 = {
    [v34]() {
        Object.defineProperty(this, 6, { configurable: true, enumerable: true, set: f30 });
        v34 >= this;
        [v1] = v28;
        return v1;
    },
};
new Uint32Array(2);
class C42 {
}
const v46 = -4347 || -4347;
v46 | v46;
v14 / -4347;
~v46;
const v50 = new C42();
const v53 = [4096,"string"];
Reflect.apply(("string").padStart, v50, v53);
