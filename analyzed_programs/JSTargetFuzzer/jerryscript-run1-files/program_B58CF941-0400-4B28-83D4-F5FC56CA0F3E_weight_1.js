new Float32Array(3717);
const v5 = new BigUint64Array(3898);
new Int32Array(204);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 3717;
}
new F9(3717, 3898, 3898, 3717);
const v16 = new F9(3898, 3898, 204, Int32Array);
const v17 = new F9(204, 204, 204, v16);
const v19 = Promise.resolve();
F9[9] = F9;
try { v17.filter(v17, v5, F9); } catch (e) {}
v19.finally(v19);
