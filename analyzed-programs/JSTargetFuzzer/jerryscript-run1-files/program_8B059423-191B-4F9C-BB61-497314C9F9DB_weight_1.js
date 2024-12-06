function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -2147483647;
}
new F0();
new F0();
new F0();
new Map();
const v22 = new Array(9, 1615953434);
const v25 = new Uint32Array(2334, Uint32Array, -9007199254740990);
new Uint32Array(4);
new Int16Array(129);
const v35 = `
    Uint32Array >= Uint32Array;
    let v37;
    try { v37 = v25.join(v35); } catch (e) {}
    v22[v37];
`;
eval(v35);
