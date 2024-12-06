new Int16Array(8);
const v5 = new Uint16Array(9);
const v8 = new Uint16Array(8);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
    this.g = v5;
}
const v15 = new F9(8, 8, 9, Int16Array);
new F9(8, 8, 8, 8);
const v17 = new F9(9, 8, 8, 8);
v17 || v15;
let v19 = 0;
do {
    const v20 = delete v8[268435441];
    let v21;
    try { v21 = v5(v20, 8, v20, v20); } catch (e) {}
    try { v21(Uint16Array); } catch (e) {}
    v19++;
} while (v19 < 6)
