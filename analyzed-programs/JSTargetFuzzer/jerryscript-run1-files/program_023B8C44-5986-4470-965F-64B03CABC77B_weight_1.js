const v2 = new Uint8ClampedArray(3);
let v5 = new Uint8Array(3);
v5 ^= v5;
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    let v14 = 0;
    while (v14 < 3) {
        break;
        v14++;
    }
    this.g = a12;
    this.a = a13;
    this.f = v5;
}
const v18 = new F8(3, 1000, v5, 3);
const v19 = v18[6];
v18[v19] = v19;
v2[v19];
const v24 = new F8(3, Float64Array, v5, 77);
new F8(77, v24, 77, 77);
new Float64Array(77);
const o28 = {
};
new Proxy(v24, o28);
new Date();
try { Int32Array(Int32Array, Int32Array, Int32Array); } catch (e) {}
