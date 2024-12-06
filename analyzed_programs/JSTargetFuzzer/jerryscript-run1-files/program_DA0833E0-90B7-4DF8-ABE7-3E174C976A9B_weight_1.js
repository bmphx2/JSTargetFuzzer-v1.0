function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = undefined;
    this.a = undefined;
    this.c = undefined;
    this[6] = 2134812360;
    const t6 = 2134812360;
    t6.length = 0;
    this[0] = F1;
    delete this[6];
    try { this.clear(SharedArrayBuffer); } catch (e) {}
}
let v10 = new F1();
const v11 = new F1();
const v12 = new F1();
v10.c = v12;
const v15 = v10 * undefined;
v10[241] = F1;
try { v11.getFloat64(v11); } catch (e) {}
--v10;
const v19 = [-11,1073741823];
[802903322];
[1024];
const v24 = new Float64Array(425);
new Uint8ClampedArray(129);
new Int8Array(129);
class C31 {
}
C31.bind();
undefined & v15;
v24[4294967295] = v19;
let {"g":v34,} = v11;
