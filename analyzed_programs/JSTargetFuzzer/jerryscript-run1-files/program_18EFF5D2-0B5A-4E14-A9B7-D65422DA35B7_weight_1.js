function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 867259668;
    this.g = 867259668;
    this.d = 867259668;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
}
new F6(v5, v4, F0, v4);
new F6(v3, v5);
new F6(v5, v4);
const v21 = new Array(9);
const v24 = new Uint32Array(2334);
new Uint32Array(4);
const v30 = new Object(129);
const v34 = `
    const v35 = Uint32Array >= Uint32Array;
    let v36;
    try { v36 = v24.join(v34, v35); } catch (e) {}
    v21[v36];
`;
eval(v34, v30, Array);
